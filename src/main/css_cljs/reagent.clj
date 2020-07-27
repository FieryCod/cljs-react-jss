(ns css-cljs.reagent)

(defmacro defstyled
  [aname body]
  (let [full-name-inner# (str aname)
        afn# (first body)
        component# (second body)
        full-name# (str component#)
        affn# (if (map? afn#)
                `(css-cljs.reagent/with-styles ~afn#)
                afn#)]
    `(def ~aname
       (fn [& args#]
         @(delay (conj [(~affn#
                         ~component#
                         {:display-name-inner ~full-name-inner#
                          :display-name ~full-name#})]
                       args#))))))
