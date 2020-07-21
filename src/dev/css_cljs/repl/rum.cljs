(ns css-cljs.repl.rum
  (:require
   [css-cljs.shared :as csh]
   [css-cljs.rum :as crum]
   [rum.core :as rum]))

(def ViewStyles {:wrapper {:margin-top "10px"
                           :&:hover {:margin-top "20px"}}})

(rum/defc InnerView
  [classes title]
  [:div {:class (:wrapper classes)} title])

(def StyledInnerView ((crum/with-styles
                        (fn [theme]
                          {:wrapper {:padding "20px"}}))
                      InnerView))


(rum/defc View
  [classes & args]
  [:div {:class [(:wrapper classes)]} (StyledInnerView "InnerView")])

(def StyledView ((crum/with-styles (fn [theme]
                                     (assoc-in ViewStyles [:wrapper] (:default-font-color theme))))
                 View))

(rum/mount (crum/ThemeProvider {:theme {:default-font-color {:color "red"}}} (StyledView 1))
           (js/document.getElementById "root"))
