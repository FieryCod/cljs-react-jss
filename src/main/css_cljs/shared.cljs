(ns css-cljs.shared
  (:require
   [clojure.spec.alpha :as sp]
   [cljs-bean.core :refer [->js ->clj bean]]
   ))
;; (sp/fdef with-styles
;;   :args (s/cat :styles-or-fn (fn? ))
;;   )
(defn with-styles
  ([styles-or-fn]
   (with-styles styles-or-fn {}))
  ([styles-or-fn opts]
   (rcs/withStyles
    (if (fn? styles-or-fn)
      (fn [^js theme] (->js (styles-or-fn (->clj theme))))
      (->js styles-or-fn))
    (->js (or opts {})))))

(defn ThemeProvider
  [opts child]
  (js/React.createElement csh/ThemeProvider (clj->js opts) child))
