E2E Testing with nw.js Example
===

The [instructions](https://github.com/nwjs/nw.js/wiki/chromedriver) for setting up `chromedriver` for nw.js are mostly complete. This repo addresses some of the missing parts by example.

Mainly,

1. How to specify the `package.json` used by the test runner
2. How to run tests from a directory besides the parent directory
3. Running tests with one command

Latest version (nw.js alpha2) does not appear to load `package.json` properly when run through the chrome driver. We use `node-webkit-v0.11.6` for now.

**Only works on OS X by default**. Change the Download URLs in `scripts/installTestEnv.sh` for your platform.

Install:

		npm install
		./scripts/installTestEnv.sh

Run:

		npm start

Run tests:

		npm test

Notes
===

The `chromedriver` for testing looks for a `package.json` in the same directory as the `chromedriver` executable. In this sample setup, we generate a `package.json` each time we run tests. 

A nice side effect of this is that we can implement merging of configuration files this way. The file `test/package_test.json` overrides properties in `package.json`. It is very short as a result.

Helpful Links
===

* Instructions for setting up `chromedriver`: https://github.com/nwjs/nw.js/wiki/chromedriver
* `wd` API for scripting tests: https://github.com/admc/wd/blob/master/doc/api.md
* Chai https://github.com/domenic/chai-as-promised/
* More Chai http://chaijs.com/api/bdd/
* `webdriver-manager` https://github.com/angular/protractor/blob/master/bin/webdriver-manager

Future
===

* Something like `webdriver-manager` for test environment
	* Detect host system for downloads
	* Handle downloading latest version of test env
* Support test env version in package.json (so you can just `npm install` everything)
* Headless testing for CI server
	* Can you run on a shippable instance with X server that doesn't need physical display?