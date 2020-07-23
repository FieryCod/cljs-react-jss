(ns css-cljs.reagent
  (:require-macros
   [css-cljs.reagent]
   [css-cljs.macros :refer [js-constructor->cljs-fn]])
  (:require
   [cljs-bean.core :refer [bean]]
   [react-jss :as rjss]
   [reagent.core :as r]
   [css-cljs.impl :as impl]))

(def ThemeProvider (r/adapt-react-class rjss/ThemeProvider))
(def JSSProvider (r/adapt-react-class rjss/JssProvider))
(js-constructor->cljs-fn "sheets-registry" rjss/SheetsRegistry)
(def sheets-registry->ssr-css-tag impl/sheets-registry->ssr-css-tag)
(def client-remove-ssr-css-tag impl/client-remove-ssr-css-tag)

(defn- React->ReactWrapped
  [component]
  (fn [props]
    (let [children (:children props)]
      (apply component (bean (:classes props))
             (cond
               (array? children) (vec children)
               (string? children) [children]
               :else children)))))

(defn with-styles
  [styles-or-fn & [opts]]
  (fn [component]
    (assert (not= (meta component) nil) "Component should be wrapped with styles using (css-cljs.reagent/defstyled ~component-name [styles-wrap component-to-wrap])")
    (r/adapt-react-class
     (impl/set-display-name
      ((impl/with-styles styles-or-fn opts)
       (r/reactify-component
        (with-meta (React->ReactWrapped component) (meta component))))
      "JssContextSubscriber"))))
