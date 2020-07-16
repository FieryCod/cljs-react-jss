(defproject fierycod/css-cljs "0.0.1"
  :description "CSS in cljs"
  ;; :url "https://github.com/thheller/shadow-cljs"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :repositories
  {"clojars" {:url "https://clojars.org/repo"
              :sign-releases false}}

  :dependencies [[org.clojure/clojure "1.10.1" :scope "provided"]
                 [org.clojure/clojurescript "1.10.764" :scope "provided"]
                 [thheller/shadow-cljs "2.10.14" :scope "provided"]
                 [cljs-bean "1.5.0"]]

  :profiles
  {:dev {:dependencies
         [[cider/cider-nrepl "0.25.3-SNAPSHOT"]
          [refactor-nrepl "2.5.0"]
          [rum "0.12.3"]
          [reagent "1.0.0-alpha2"]
          [nrepl/nrepl "0.8.0-alpha5"]]}}

  :source-paths
  ["src/main" "src/dev"]

  :test-paths
  ["test/main"]

  :java-source-paths
  ["src/main"]

  )
