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
  [:div {:class [(:wrapper classes) (:additional classes)]} [InnerViewStyled "InnerView" AnotherComponentStyled]])

(creg/defstyled ViewStyled
  [(creg/with-styles {:wrapper {:padding "20px"}}) View])

(creg/defstyled StyleViewWithAdditionalStyles
  [(creg/with-styles (fn [_] {:additional {:border "1px solid black"}})
     {:merge-styles? true})
   ViewStyled])

(rd/render [creg/JssProviderWithMinification {}
            [creg/ThemeProvider {:theme {:background-color "red"}}
             [StyleViewWithAdditionalStyles]]]
           (js/document.getElementById "root"))
