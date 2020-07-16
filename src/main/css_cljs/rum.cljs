(ns css-cljs.rum
  (:require
   [cljsjs.react-jss]
   [rum.core :as rum]
   [cljs-bean.core :refer [bean]]
   [css-cljs.shared :as csh]))

(defn- NormalizeStylesheetWrapper
  [component & component-args]
  (fn [^js props]
    (apply component (bean (.-classes props)) component-args)))

(defn with-styles
  [styles-or-fn & [opts]]
  (fn [comp]
    (fn [& comp-args]
      (js/React.createElement ((js/withStyles styles-or-fn opts)
                               (apply NormalizeStylesheetWrapper comp comp-args))
                              #js {}
                          nil))))
