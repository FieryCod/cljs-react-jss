(ns css-cljs.core
  (:require-macros
   [css-cljs.core :refer [react-tag->cljs-tag
                            js-constructor->cljs-fn]])
  (:require
   [cljsjs.react-jss]
   [cljs-bean.core :refer [->js ->clj bean]]))

(defn- with-styles
  ([styles-or-fn]
   (with-styles styles-or-fn {}))
  ([styles-or-fn opts]
   (js/ReactJSS.withStyles
    (if (fn? styles-or-fn)
      (fn [^js theme] (->js (styles-or-fn (->clj (bean theme)))))
      (->js styles-or-fn))
    (->js (or opts {})))))

(react-tag->cljs-tag "ThemeProvider" js/ReactJSS.ThemeProvider)
(react-tag->cljs-tag "JSSProvider" js/ReactJSS.JssProvider)
(js-constructor->cljs-fn "sheets-registry" js/ReactJSS.SheetsRegistry)

(defn sheets-registry->ssr-css-tag
  [^js sheets-registry]
  (str "<style type=\"text/css\" id=\"server-side-styles\">"
       (.toString sheets-registry)
       "</style>"))

(defn client-remove-ssr-css-tag
  []
  (as-> (js/document.getElementById "server-side-styles") ^js ssr-styles
    (.. ssr-styles -parentNode (removeChild ssr-styles))))
