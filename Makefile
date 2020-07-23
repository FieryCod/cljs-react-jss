
externs:
	yarn run webpack --mode=production && \
	cd resources/webpack-compile && \
	curl -O https://unpkg.com/react@16.13.1/umd/react.development.js && mv react.development.js react.js && \
	yarn run generate-extern -f resources/webpack-compile/react.js,resources/cljsjs/react-jss.min.js -n ReactJSS -o resources/cljsjs/react-jss/common/react-jss.ext.js && \
  rm -Rf react.js

package-local:
	yarn run webpack --mode=development
	yarn run webpack --mode=production
	boot package install target

publish-local:
	make package-local
	lein install

shadow:
	@yarn shadow-cljs -d "nrepl:0.8.0-alpha5" \
		 							  -d "cider/piggieback:0.5.0" \
		                -d "com.billpiel/sayid:0.0.18" \
	                  -d "refactor-nrepl:2.5.0" \
	                  -d "cider/cider-nrepl:0.25.3-SNAPSHOT" \
                    server
