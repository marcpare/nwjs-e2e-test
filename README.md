E2E Testing with nw.js Example
===

Setting up `crhomedriver` for nw.js
https://github.com/nwjs/nw.js/wiki/chromedriver

Latest version (nw.js alpha2) does not appear to load `package.json` properly when run through the chrome driver.

Install:

		npm install

Run:

		npm start

Run tests:

		./test/startSelenium.sh
		npm test

TODO:

* One command for running tests
* Generate the package.json
* Deps in separate folder


Future
===

* Detect host system for downloads
* Handle downloading latest version of test env
* Support test env version in package.json (so you can just `npm install` everything)

