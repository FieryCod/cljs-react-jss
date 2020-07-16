(ns css-cljs.repl
  (:require
   [css-cljs.reagent :as creg]
   [css-cljs.rum :as crum]
   [rum.core :as rum]
   [reagent.dom :as rd]))

(def ViewStyles {:wrapper {:margin-top "10px"
                           :&:hover {:margin-top "20px"}}})
;; Reagent

;; (defn View
;;   [classes & args]
;;   [:div {:class [(:wrapper classes)]} "Example"])

;; (def StyledView ((creg/with-styles ViewStyles) View))

;; (rd/render [StyledView 1 2 3] (js/document.getElementById "root"))

;; Rum


(rum/defc InnerView
  [classes]
  [:div {:class (:wrapper classes)} "InnerView"])

(def StyledInnerView ((crum/with-styles
                        (fn [theme]
                          (println "XDD" theme)
                          {:wrapper {:padding "20px"}})
                        {:injectTheme true})
                      InnerView))


(rum/defc View
  [classes & args]
  [:div {:class [(:wrapper classes)]} (StyledInnerView)])

(def StyledView ((crum/with-styles (fn [theme]
                                     (assoc-in ViewStyles [:wrapper] (:default-font-color theme))))
                 View))


(rum/mount (crum/ThemeProvider {:theme {:default-font-color {:color "red"}}}
                               (StyledView 1))
           (js/document.getElementById "root"))
