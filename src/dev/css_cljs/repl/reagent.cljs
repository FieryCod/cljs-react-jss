(ns css-cljs.repl.reagent
  (:require
   [css-cljs.reagent :as creg]
   [reagent.core :as r]
   [reagent.dom :as rd]))

(defn InnerView
  [classes title component]
  [:div {:class (:wrapper classes)}
   title
   [component]])

(def InnerViewStyled ((creg/with-styles
                        {:wrapper {:color "red"}})
                      InnerView))
(defn AnotherComponent
  [classes]
  [:div {:class (:wrapper classes)} "Another component"])

(def AnotherComponentStyled ((creg/with-styles {:wrapper {:color "orange"}}) AnotherComponent))

(defn View
  [classes]
  [:div {:class [(:wrapper classes)]} [InnerViewStyled "InnerView" AnotherComponentStyled]])

(def ViewStyled ((creg/with-styles
                   {:wrapper {:padding "20px"}})
                 View))

(rd/render [creg/ThemeProvider {:theme {:background-color "red"}} [ViewStyled]] (js/document.getElementById "root"))
