
;; (ns css-cljs.reagent
;;   (:require
;;    [cljs-bean.core :refer [bean ->clj]]
;;    [reagent.core :as r]
;;    [css-cljs.shared :as csh]))

;; (defn- NormalizeStylesheetWrapper
;;   [component]
;;   (fn [props]
;;     (apply component (bean (:classes props)) (vec (:children props)))))

;; (defn with-styles
;;   [styles-or-fn & [opts]]
;;   (fn [component]
;;     (r/adapt-react-class
;;      ((csh/with-styles styles-or-fn opts)
;;       (r/reactify-component (NormalizeStylesheetWrapper component))))))

;; ;; No support for SSR for that moment
