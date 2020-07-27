(ns css-cljs.utils-test
  (:require
   [clojure.set :as set]
   [clojure.edn :as edn])
  #?@(:cljs
      [(:require-macros [css-cljs.utils-test])
       (:require
        [reagent.core :as r]
        [cljs.test :as t :include-macros true]
        ["@testing-library/react" :as rr])]))

#?(:cljs
   (def render rr/render))

#?(:cljs
   (def cleanup rr/cleanup))

#?(:cljs
   (defn test-component
     [component asserts-fn]
     (asserts-fn (rr/render component))))

(defmacro cleanup-after-every!
  []
  `(t/use-fixtures :each {:before nil
                          :after (fn []
                                   (t/async done#
                                            (-> (css-cljs.utils-test/cleanup)
                                                (.then done#))))}))
(defn contains-all?
  [m kxs]
  (and (map? m)
       (set/subset?
        (set kxs)
        (set (keys m)))))

(defmacro component->out
  [body]
  (let [component# (if (vector? body) `(reagent.core/as-element ~body) body)]
    `(clojure.edn/read-string (with-out-str (css-cljs.utils-test/render ~component#)))))
