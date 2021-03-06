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

(defn- split-args-by-styles
  [component-args]
  (if (:__merge-styles__ (first component-args))
    [(dissoc (first component-args) :__merge-styles__) (rest component-args)]
    [nil component-args]))

(defn- React->ReactWrapped
  [component & component-args]
  (fn [^js props]
    (let [[additional-styles args] (split-args-by-styles component-args)]
      (apply component (merge (cljs-bean/bean (.-classes props)) additional-styles) args))))

(defn with-styles
  [styles-or-fn & [opts]]
  (fn [component-fn]
    (fn [& component-args]
      (let [[component component-meta] (component-fn)
            _ (assert (not= component-meta nil) "Component should be wrapped with styles using (css-cljs.rum/defstyled ~component-name [styles-wrap component-to-wrap])")
            rum-wrap (impl/set-display-name (apply React->ReactWrapped component component-args)
                                            (:display-name-inner component-meta))
            ctor ((impl/with-styles styles-or-fn opts) rum-wrap)
            inner-component (gobj/get ctor "InnerComponent")]
        (impl/set-display-name inner-component (:display-name component-meta))
        (impl/set-display-name ctor "JssContextSubscriber")
        (react/createElement ctor #js {} nil)))))

(def JssProviderWithMinification (impl/JssProviderWithMinification JssProvider))
