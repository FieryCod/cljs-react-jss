(defproject fierycod/cljs-react-jss "0.0.1"
  :description "Tiny wrapper around react-jss for Clojurescript Node.js/Browser environments."
  :url "https://github.com/FieryCod/cljs-react-jss"
  :license {:name "MIT"
            :url "https://raw.githubusercontent.com/FieryCod/cljs-react-jss/master/LICENSE"}

  :repositories
  {"clojars" {:url "https://clojars.org/repo"
              :sign-releases false}}

  :dependencies [[org.clojure/clojure "1.10.1" :scope "provided"]
                 [org.clojure/clojurescript "1.10.764" :scope "provided"]
                 [thheller/shadow-cljs "2.10.14" :scope "provided"]
                 [cljs-bean "1.5.0"]]


  :source-paths ["src/main"]
  :test-paths ["test/main"]

  :profiles
  {:dev {:source-paths
         ["src/main" "src/dev"]

         :dependencies
         [[cider/cider-nrepl "0.25.3-SNAPSHOT"]
          [refactor-nrepl "2.5.0"]
          [rum "0.12.3"]
          [reagent "1.0.0-alpha2"]
          [nrepl/nrepl "0.8.0-alpha5"]]}})
