(ns css-cljs.impl
  (:require
   [goog.object :as gobj]
   [react-jss :as rjss]
   [cljs-bean.core :refer [->js ->clj bean]]))

(defn with-styles
  [styles-or-fn opts]
  (rjss/withStyles
   (if (fn? styles-or-fn)
     (fn Hello [^js theme] (->js (styles-or-fn (->clj (bean theme)))))
     (->js styles-or-fn))
   (->js (or opts {}))))

(defn sheets-registry->ssr-css-tag
  [^js sheets-registry]
  (str "<style type=\"text/css\" id=\"server-side-styles\">"
       (.toString sheets-registry)
       "</style>"))

(defn client-remove-ssr-css-tag
  []
  (as-> (js/document.getElementById "server-side-styles") ^js ssr-styles
    (.. ssr-styles -parentNode (removeChild ssr-styles))))

(defn set-display-name
  [component display-name]
  (gobj/set component "displayName" display-name)
  component)
