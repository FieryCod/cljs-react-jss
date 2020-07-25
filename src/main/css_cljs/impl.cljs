(ns css-cljs.impl
  (:require
   [goog.object :as gobj]
   [react-jss :as rjss]
   [cljs-bean.core :refer [->js ->clj bean]]))

(def ^:const default-ssr-id "server-side-styles")

(defn with-styles
  [styles-or-fn opts]
  (rjss/withStyles
   (if (fn? styles-or-fn)
     (fn [^js theme] (->js (styles-or-fn (->clj (bean theme)))))
     (->js styles-or-fn))
   (->js (or opts {}))))

(defn sheets-registry->ssr-css-tag
  ([^js sheets-registry]
   (sheets-registry->ssr-css-tag sheets-registry default-ssr-id))
  ([^js sheets-registry id]
   (str "<style type=\"text/css\" id=\"" id "\">"
        (.toString sheets-registry)
        "</style>")))

(defn client-remove-ssr-css-tag
  ([]
   (client-remove-ssr-css-tag default-ssr-id))
  ([id]
   (as-> (js/document.getElementById id) ^js ssr-styles
     (.. ssr-styles -parentNode (removeChild ssr-styles)))))

(defn set-display-name
  [^js component display-name]
  (gobj/set component "displayName" display-name)
  component)
