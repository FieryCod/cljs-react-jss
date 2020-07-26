(ns css-cljs.impl
  (:require
   [css-cljs.def :as df]
   [goog.functions :as fns]
   [goog.object :as gobj]
   [clojure.string :as string]
   [react-jss :as rjss]
   [cljs-bean.core :refer [->js ->clj bean]]))

(def ^:const default-ssr-id "server-side-styles")

(defn with-styles
  [styles-or-fn {:keys [merge-styles?] :as opts}]
  (rjss/withStyles
   (if (fn? styles-or-fn)
     (fn [^js theme] (->js (cond-> (styles-or-fn (->clj (bean theme)))
                            merge-styles? (assoc :__merge-styles__ #js {}))))
     (->js styles-or-fn))
   (->js (or (dissoc opts [:merge-styles?]) {}))))

(defn sheets-registry->ssr-css-tag
  ([^js sheets-registry]
   (sheets-registry->ssr-css-tag sheets-registry default-ssr-id))
  ([^js sheets-registry id]
   (str "<style type=\"text/css\" id=\"" id "\">"
        (.toString sheets-registry)
        "</style>")))

(defn client-remove-ssr-css-tag
  ([]
   (client-remove-ssr-css-tag default-ssr-id))
  ([id]
   (as-> (js/document.getElementById id) ^js ssr-styles
     (.. ssr-styles -parentNode (removeChild ssr-styles)))))

(def set-display-name
  (if df/with-rename?
    (fn [^js component display-name]
      (gobj/set component "displayName" display-name)
      component)
    (fn [^js component _]
      component)))

(defn create-generate-id
  "Based on the following answer:
  https://github.com/cssinjs/jss/issues/1200#issuecomment-537896517"
  [& [{:keys [module-prefix] :or {module-prefix "v"}}]]
  (let [counter (volatile! -1)
        max-rules 1e10]
    (fn [^js rule ^js sheet]
      (vswap! counter inc)
      (assert (< @counter max-rules) "[css-cljs.impl/create-generate-id] You might have a memory leak. To many rules has been used.")
      (let [prefix (or (gobj/getValueByKeys sheet "options" "classNamePrefix") "")
            jss-id (or (some-> (gobj/getValueByKeys sheet "options" "jss" "id") str) "")]
        (if df/minify?
          (str module-prefix "-" jss-id "-" @counter)
          (str prefix
               (.-key rule)
               "-"
               (if (string/blank? jss-id) "" (str jss-id "-"))
               @counter))))))

(def ^:const gen-id-props [:module-prefix])

(defn JssProviderWithMinification
  [^js jss-provider]
  (fn [props child]
    (as-> (merge {:generateId (create-generate-id (select-keys props gen-id-props))}
                 (apply dissoc props (conj gen-id-props :generateId)))
        final-props
      (if (fn? jss-provider)
        ;; Rum
        (jss-provider final-props child)
        ;; Reagent
        [jss-provider final-props child]))))

(defn- set-meta! [c]
  (let [f #(let [ctr (c)]
             (.apply ctr ctr (js-arguments)))]
    (specify! f IMeta (-meta [_] (meta (c))))
    f))

(defn dce-builder!
  [afn & args]
  (let [bf #(apply afn args)
        c  (fns/cacheReturnValue bf)]
    (set-meta! c)))
