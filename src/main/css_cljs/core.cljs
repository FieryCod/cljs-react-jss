(ns css-cljs.core
  (:require
   [cljsjs.react-jss]
   [reagent.dom :as rd]
   [reagent.core :as r]
   ))

;; (defn View
;;   [{:keys [classes]}]
;;   [:div {:class (:div classes)} "Hello"])


;; ;; (println ((rcs/withStyles #js {:div #js {:fontWeight "bold"}}) View))
;; (rd/render [(ViewStyles View)] (js/document.getElementById "root"))
(defn -main
  []
  nil)
