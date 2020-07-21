(ns css-cljs.reagent
  (:require-macros [css-cljs.macros :refer [js-constructor->cljs-fn]])
  (:require
   [cljs-bean.core :refer [bean]]
   [react-jss :as rjss]
   [reagent.core :as r]
   [css-cljs.shared :as csh]))

(defn- NormalizeStylesheetWrapper
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
    (r/adapt-react-class
     ((#'csh/with-styles styles-or-fn opts)
      (r/reactify-component (NormalizeStylesheetWrapper component))))))

(def ThemeProvider (r/adapt-react-class rjss/ThemeProvider))

(def JSSProvider (r/adapt-react-class rjss/JssProvider))

(js-constructor->cljs-fn "sheets-registry" rjss/SheetsRegistry)

;; ;; No support for SSR for that moment
