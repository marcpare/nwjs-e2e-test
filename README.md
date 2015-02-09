E2E Testing with nw.js Example
===

Setting up `crhomedriver` for nw.js
https://github.com/nwjs/nw.js/wiki/chromedriver

Latest version (nw.js alpha2) does not appear to load `package.json` properly when run through the chrome driver.

Install:

		npm install
		./scripts/installTestEnv.sh

Run:

		npm start

Run tests:

		npm test

Future
===

* Something like `webdriver-manager` for test environment
	* Detect host system for downloads
	* Handle downloading latest version of test env
* Support test env version in package.json (so you can just `npm install` everything)
* Headless testing for CI server
	* Can you run on a shippable instance with X server that doesn't need physical display?