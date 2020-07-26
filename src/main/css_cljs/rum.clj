(ns css-cljs.rum)

(defmacro defstyled
  [aname body]
  (let [full-name-inner# (str aname)
        afn# (first body)
        component# (second body)
        full-name# (str component#)]
    `(def ~aname (css-cljs.impl/dce-builder!
                  ~afn#
                  #(-> [~component#
                        {:display-name-inner ~full-name-inner#
                         :display-name ~full-name#}])))))
