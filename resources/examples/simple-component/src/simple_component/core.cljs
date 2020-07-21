(ns ^:figwheel-hooks simple-component.core
  (:require
   ["react-jss" :as react-jss]
   [css-cljs.rum :as crum]
   [css-cljs.core :as csc]
   [goog.dom :as gdom]
   [rum.core :as rum]))

(js/console.log react-jss)

;; (set! *warn-on-infer* true)

(println "This text is printed from src/simple_component/core.cljs. Go ahead and edit it and see reloading in action.")

(defn multiply [a b] (* a b))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"}))

(defn get-app-element []
  (gdom/getElement "app"))

(rum/defc HelloWorld
  [classes]
  [:div {:class (:wrapper classes)}
   [:h1 (:text @app-state)]
   [:h3 "Edit this in src/simple_component/core.cljs and watch it change!"]])

(def styles (fn [theme]
              {:wrapper {:background-color "red"
                         :color (:color theme)}}))

(def StyledHelloWorld ((crum/with-styles styles) HelloWorld))

(def theme {:color "white"})

(defn mount [el]
  (rum/mount (csc/ThemeProvider {:theme theme} (StyledHelloWorld)) el))

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
