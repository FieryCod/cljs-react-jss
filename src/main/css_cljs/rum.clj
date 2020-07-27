(ns css-cljs.rum)

(defmacro defstyled
  [aname body]
  (let [full-name-inner# (str aname)
        afn# (first body)
        component# (second body)
        full-name# (str component#)
        affn# (if (map? afn#)
                `(css-cljs.rum/with-styles ~afn#)
                afn#)]
    `(def ~aname (css-cljs.impl/dce-builder!
                  ~affn#
                  #(-> [~component#
                        {:display-name-inner ~full-name-inner#
                         :display-name ~full-name#}])))))
