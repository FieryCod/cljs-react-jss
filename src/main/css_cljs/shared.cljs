(ns css-cljs.shared
  (:require
   [react-jss :as rjss]
   [cljs-bean.core :refer [->js ->clj bean]]))

(defn- with-styles
  ([styles-or-fn]
   (with-styles styles-or-fn {}))
  ([styles-or-fn opts]
   (rjss/withStyles
    (if (fn? styles-or-fn)
      (fn [^js theme] (->js (styles-or-fn (->clj (bean theme)))))
      (->js styles-or-fn))
    (->js (or opts {})))))

(defn sheets-registry->ssr-css-tag
  [^js sheets-registry]
  (str "<style type=\"text/css\" id=\"server-side-styles\">"
       (.toString sheets-registry)
       "</style>"))

(defn client-remove-ssr-css-tag
  []
  (as-> (js/document.getElementById "server-side-styles") ^js ssr-styles
    (.. ssr-styles -parentNode (removeChild ssr-styles))))
