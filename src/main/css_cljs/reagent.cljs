(ns css-cljs.reagent
  (:require-macros
   [css-cljs.reagent]
   [css-cljs.macros :refer [js-constructor->cljs-fn]])
  (:require
   [clojure.edn :as edn]
   [cljs-bean.core :refer [bean]]
   [clojure.string :as string]
   [react-jss :as rjss]
   [reagent.core :as r]
   [css-cljs.impl :as impl]))

(def ThemeProvider (r/adapt-react-class rjss/ThemeProvider))
(def JssProvider (r/adapt-react-class rjss/JssProvider))
(js-constructor->cljs-fn "sheets-registry" rjss/SheetsRegistry)
(def sheets-registry->ssr-css-tag impl/sheets-registry->ssr-css-tag)
(def client-remove-ssr-css-tag impl/client-remove-ssr-css-tag)

(defn- split-args-by-styles
  [component-args]
  (let [first-arg (first component-args)]
  (if (and (string? first-arg) (string/includes? first-arg ":__merge-styles__"))
    [(dissoc (edn/read-string first-arg) :__merge-styles__) (rest component-args)]
    [nil component-args])))

(defn- React->ReactWrapped
  [component]
  (fn [props]
    (let [children (:children props)
          [additional-styles children] (if (array? children)
                                         (split-args-by-styles (vec children))
                                         [nil children])]
      (apply component (merge (bean (:classes props)) additional-styles)
             (cond
               (array? children) (vec children)
               (string? children) [children]
               :else children)))))

(defn with-styles
  [styles-or-fn & [opts]]
  (fn [component component-meta]
    (assert (not= component-meta nil) "Component should be wrapped with styles using (css-cljs.reagent/defstyled ~component-name [styles-wrap component-to-wrap])")
    (r/adapt-react-class
     (impl/set-display-name
      ((impl/dce-builder! #(impl/with-styles styles-or-fn opts))
       (r/reactify-component (with-meta (React->ReactWrapped component) (meta component-meta))))
      "JssContextSubscriber"))))

(def JssProviderWithMinification
  (impl/set-display-name (impl/JssProviderWithMinification JssProvider) "JssProviderWithMinification"))
