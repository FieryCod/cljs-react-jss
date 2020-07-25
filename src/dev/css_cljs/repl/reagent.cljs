(ns css-cljs.repl.reagent
  (:require
   [css-cljs.reagent :as creg]
   [reagent.dom :as rd]))

(defn InnerView
  [classes title component]
  [:div {:class (:wrapper classes)}
   title
   [component]])

(creg/defstyled InnerViewStyled
  [(creg/with-styles {:wrapper {:color "red"}}) InnerView])

(defn AnotherComponent
  [classes]
  [:div {:class (:wrapper classes)} "Another component"])

(creg/defstyled AnotherComponentStyled
  [(creg/with-styles {:wrapper {:color "orange"}}) AnotherComponent])

(defn View
  [classes]
  [:div {:class [(:wrapper classes)]} [InnerViewStyled "InnerView" AnotherComponentStyled]])

(creg/defstyled ViewStyled
  [(creg/with-styles {:wrapper {:padding "20px"}}) View])

(rd/render [creg/ThemeProvider {:theme {:background-color "red"}}
            [creg/MinificationProvider {}
             [ViewStyled]]]
           (js/document.getElementById "root"))
