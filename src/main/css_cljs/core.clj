(ns css-cljs.core)

(defmacro ^:private react-tag->cljs-tag
  [aname tag]
  `(def ~(symbol aname)
     (fn [opts# children#]
       ^js (js/React.createElement ~tag (cljs-bean.core/->js opts#) children#))))

(defmacro ^:private js-constructor->cljs-fn
  [aname js-constructor]
  `(def ~(symbol aname)
     (fn []
       ^js (new ~js-constructor))))
