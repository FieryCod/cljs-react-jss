(ns css-cljs.rum
  (:require-macros
   [css-cljs.macros :refer [react-tag->cljs-tag js-constructor->cljs-fn]]
   [css-cljs.rum])
  (:require
   [goog.object :as gobj]
   [react :as react]
   [cljs-bean.core :as cljs-bean]
   [react-jss :as rjss]
   [css-cljs.impl :as impl]))

(react-tag->cljs-tag "ThemeProvider" rjss/ThemeProvider)
(react-tag->cljs-tag "JssProvider" rjss/JssProvider)
(js-constructor->cljs-fn "sheets-registry" rjss/SheetsRegistry)
(def sheets-registry->ssr-css-tag impl/sheets-registry->ssr-css-tag)
(def client-remove-ssr-css-tag impl/client-remove-ssr-css-tag)

(defn- React->ReactWrapped
  [component & component-args]
  (fn [^js props]
    (apply component (cljs-bean/bean (.-classes props)) component-args)))

(defn with-styles
  [styles-or-fn & [opts]]
  (fn [component]
    (fn [& component-args]
      (assert (not= (meta component) nil) "Component should be wrapped with styles using (css-cljs.rum/defstyled ~component-name [styles-wrap component-to-wrap])")
      (let [component-meta (meta component)
            rum-wrap (impl/set-display-name (apply React->ReactWrapped component component-args)
                                            (:display-name-inner component-meta))
            ctor ((impl/with-styles styles-or-fn opts) rum-wrap)
            inner-component (gobj/get ctor "InnerComponent")]
        (impl/set-display-name inner-component (:display-name component-meta))
        (impl/set-display-name ctor "JssContextSubscriber")
        (react/createElement ctor #js {} nil)))))

(def MinificationProvider (impl/MinificationProvider JssProvider))
