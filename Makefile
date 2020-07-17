
package-local:
	yarn run webpack --mode=development
	yarn run webpack --mode=production
	boot package install target


publish-local:
	make package-local
	lein install
