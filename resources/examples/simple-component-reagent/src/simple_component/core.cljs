(ns ^:figwheel-hooks simple-component.core
  (:require
   [css-cljs.reagent :as cr]
   [goog.dom :as gdom]
   [reagent.dom :as rd]
   [reagent.core :as r]))


(println "This text is printed from src/simple_component/core.cljs. Go ahead and edit it and see reloading in action.")

(defn multiply [a b] (* a b))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"}))

(defn get-app-element []
  (gdom/getElement "app"))

(defn HelloWorld
  [classes]
  [:div {:class (:wrapper classes)}
   [:h1 (:text @app-state)]
   [:h3 "Edit this in src/simple_component/core.cljs and watch it change!"]])

(def styles (fn [theme]
              {:wrapper {:background-color "red"
                         :color (:color theme)}}))

(cr/defstyled StyledHelloWorld [(cr/with-styles styles) HelloWorld])

(defn HelloWorldIShouldBeRemoved
  [classes]
  [:div {:class (:wrapper classes)}
   [:h1 (:text @app-state)]
   [:h3 "I Should be removed"]])

(cr/defstyled HelloWorldIShouldBeRemovedStyled
  [(cr/with-styles styles) HelloWorldIShouldBeRemoved])

(def theme {:color "white"})

(defn mount [el]
  (rd/render
   [cr/JssProviderWithMinification {}
    [cr/ThemeProvider {:theme theme}
     [StyledHelloWorld]]]
   el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
