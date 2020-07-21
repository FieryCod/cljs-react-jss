(ns css-cljs.rum
  (:require-macros [css-cljs.macros :refer [react-tag->cljs-tag js-constructor->cljs-fn]])
  (:require
   [react :as react]
   [cljs-bean.core :as cljs-bean]
   [react-jss :as rjss]
   [css-cljs.shared :as csh]))


(react-tag->cljs-tag "ThemeProvider" rjss/ThemeProvider)

(react-tag->cljs-tag "JSSProvider" rjss/JssProvider)

(js-constructor->cljs-fn "sheets-registry" rjss/SheetsRegistry)

(defn- NormalizeStylesheetWrapper
  [component & component-args]
  (fn [^js props]
    (apply component (cljs-bean/bean (.-classes props)) component-args)))

(defn with-styles
  [styles-or-fn & [opts]]
  (fn [comp]
    (fn [& comp-args]
      (react/createElement ((#'csh/with-styles styles-or-fn opts)
                            (apply NormalizeStylesheetWrapper comp comp-args))
                           #js {}
                           nil))))
