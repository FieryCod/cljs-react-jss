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
                 [thheller/shadow-cljs "2.10.17" :scope "provided"]
                 [cljsjs/react-jss "10.3.0-0"]
                 [cljs-bean "1.5.0"]]

  :resource-paths []

  :source-paths ["src/main"]
  :test-paths ["test/main"]

  :profiles
  {:dev {:source-paths
         ["src/main"
          "src/dev"
          "test/main"]

         :dependencies
         [[rum "0.12.3"]
          [reagent "1.0.0-alpha2"]]}})
