(ns css-cljs.repl.rum
  (:require
   [css-cljs.rum :as crum]
   [rum.core :as rum]))

(def ViewStyles {:wrapper {:margin-top "10px"
                           :&:hover {:margin-top "20px"}}})

(rum/defc InnerView
  [classes title]
  [:div {:class (:wrapper classes)} title])

(crum/defstyled StyledInnerView
  [(crum/with-styles {:wrapper {:padding "20px"}}) InnerView])

(rum/defc View
  [classes]
  [:div {:class [(:wrapper classes) (:additional classes)]} (StyledInnerView "InnerView")])

(crum/defstyled StyledView
  [(crum/with-styles (fn [theme]
                       (assoc-in ViewStyles [:wrapper] (:default-font-color theme))))
   View])

(crum/defstyled StyleViewWithAdditionalStyles
  [(crum/with-styles (fn [_] {:additional {:border "1px solid black"}})
     {:merge-styles? true})
   StyledView])

(rum/mount
 (crum/JssProviderWithMinification {:module-prefix "v"}
                                   (crum/ThemeProvider {:theme {:default-font-color {:color "red"}}}
                                                       (StyleViewWithAdditionalStyles 1)))
 (js/document.getElementById "test-root"))
