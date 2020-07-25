(ns css-cljs.macros)

(defmacro js-constructor->cljs-fn
  [aname js-constructor]
  `(def ~(symbol aname)
     (fn []
       ^js (new ~js-constructor))))

(defmacro react-tag->cljs-tag
  [aname tag]
  `(def ~(symbol aname)
     (fn [opts# children#]
       ^js.React/Component (js/React.createElement ~tag (cljs-bean.core/->js opts#) children#))))
