(ns css-cljs.rum
  (:require
   [cljs-bean.core :refer [bean]]
   [css-cljs.core :as csh]))

(defn- NormalizeStylesheetWrapper
  [component & component-args]
  (fn [^js props]
    (apply component (bean (.-classes props)) component-args)))

(defn with-styles
  [styles-or-fn & [opts]]
  (fn [comp]
    (fn [& comp-args]
      (js/React.createElement ((#'csh/with-styles styles-or-fn opts)
                               (apply NormalizeStylesheetWrapper comp comp-args))
                              #js {}
                              nil))))
