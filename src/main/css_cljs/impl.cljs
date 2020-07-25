(ns css-cljs.impl
  (:require
   [css-cljs.def :as df]
   [goog.object :as gobj]
   [react :as react]
   [clojure.string :as string]
   [react-jss :as rjss]
   [cljs-bean.core :refer [->js ->clj bean]]))

(def ^:const default-ssr-id "server-side-styles")

(defn with-styles
  [styles-or-fn opts]
  (rjss/withStyles
   (if (fn? styles-or-fn)
     (fn [^js theme] (->js (styles-or-fn (->clj (bean theme)))))
     (->js styles-or-fn))
   (->js (or opts {}))))

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

(defn set-display-name
  [^js component display-name]
  (gobj/set component "displayName" display-name)
  component)

(defn create-generate-id
  "Based on the following answer:
  https://github.com/cssinjs/jss/issues/1200#issuecomment-537896517"
  [& [{:keys [module-prefix] :or {module-prefix "v"}}]]
  (let [counter (volatile! 0)
        max-rules 1e10]
    (fn [^js rule ^js sheet]
      (vswap! counter inc)
      (if (> @counter max-rules)
        (js/console.error "[JSS] You might have a memory leak.")
        (let [prefix (or (gobj/getValueByKeys sheet "options" "classNamePrefix") "")
              jss-id (or (some-> (gobj/getValueByKeys sheet "options" "jss" "id") str) "")]
          (if df/minify-selectors
            (str module-prefix "-" jss-id "-" @counter)
            (str prefix
                 (.-key rule)
                 "-"
                 (if (string/blank? jss-id) "" (str jss-id "-"))
                 @counter)))))))

(def ^:const gen-id-props [:module-prefix])

(defn MinificationProvider
  [^js jss-provider]
  (fn [props child]
    (as-> (merge {:generateId (create-generate-id (select-keys props gen-id-props))}
                 (apply dissoc props gen-id-props))
        final-props
      (if (fn? jss-provider)
        ;; Rum
        (jss-provider final-props child)
        ;; Reagent
        [jss-provider final-props child]))))
