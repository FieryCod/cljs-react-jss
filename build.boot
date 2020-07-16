(set-env!
  ;; :resource-paths #{"resources"}
  :dependencies '[[cljsjs/boot-cljsjs "0.10.5" :scope "test"]])

(require '[cljsjs.boot-cljsjs.packaging :refer :all])

(def +lib-version+ "10.3.0")
(def +version+ (str +lib-version+ "-0"))

(task-options!
 pom  {:project     'cljsjs/react-jss
       :version     +version+
       :description "Support for colocating your styles with your JavaScript component."
       :url         "https://github.com/Khan/aphrodite"
       :scm         {:url "https://github.com/Khan/aphrodite"}
       :license     {"MIT" "http://opensource.org/licenses/MIT"}})

(deftask package []
  (comp
   (download :url (format "https://unpkg.com/react-jss@%s/dist/react-jss.js" +lib-version+)
             :checksum "A051A8D8A4EC46517CE90A849A3522E9"
             )
   (download :url (format "https://unpkg.com/react-jss@%s/dist/react-jss.min.js" +lib-version+)
             :checksum "3501E642EEB2F7A5493F27FD2D68F473"
             )
   (sift :move {#"react-jss\.js" "cljsjs/react-jss/development/react-jss.inc.js"
                #"react-jss\.min\.js" "cljsjs/react-jss/development/react-jss.min.inc.js"})
   (sift :include #{#"^cljsjs"})
   (deps-cljs :name "cljsjs.react-jss")
   (pom)
   (jar)))
