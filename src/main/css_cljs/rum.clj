(ns css-cljs.rum)

(defmacro defstyled
  [aname body]
  (let [ns-name# (str (get-in &env [:ns :name]))
        full-name-inner (str ns-name# "/" aname)
        afn# (first body)
        component# (second body)
        full-name (str ns-name# "/" (str component#))]
    `(def ~aname (~afn# (with-meta ~component# {:display-name-inner ~full-name-inner
                                                :display-name ~full-name})))))
