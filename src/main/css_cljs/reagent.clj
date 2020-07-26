(ns css-cljs.reagent)

(defmacro defstyled
  [aname body]
  (let [full-name-inner# (str aname)
        afn# (first body)
        component# (second body)
        full-name# (str component#)]
    `(def ~aname
       (fn [& args#]
         @(delay (conj [(~afn#
                         ~component#
                         {:display-name-inner ~full-name-inner#
                          :display-name ~full-name#})]
                       args#))))))
