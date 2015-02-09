#!/usr/bin/env node

// Run from project base
// e.g. ./scripts/test.js

var spawn = require('child_process').spawn,
		exec = require('child_process').exec,
		fs = require('fs'),
		path = require('path');

var outputSelenium = false;

function readJSON (filename) {
	var filePath = path.join(process.cwd(), filename);
	var contents = fs.readFileSync(filePath);
	return JSON.parse(contents);
};

var packageBase = readJSON('package.json');
var packageTest = readJSON('test/package_test.json');

// Merge package.json and test/package_test.json
// Output to test/env/package.json

function isObject (obj) {
  return obj === Object(obj);
};
function mergeObjects (base, override) {
	for (var key in override) {
		if (key in base) {
			if (isObject(base[key])) {
				mergeObjects(base[key], override[key]);
			} else {
				base[key] = override[key];
			}
		} else {
			base[key] = override[key];
		}
	}
	return base;
};

var packageFinal = mergeObjects(packageBase, packageTest);
fs.writeFileSync('test/env/package.json', JSON.stringify(packageFinal, null, 2));

// Spawn selenium
sel = spawn("./test/env/startSelenium.sh");

if (outputSelenium) {
	sel.stdout.on('data', function (data) {
	  console.log('stdout: ' + data);
	});

	sel.stderr.on('data', function (data) {
	  console.log('stderr: ' + data);
	});

	sel.on('close', function (code) {
	  console.log('child process exited with code ' + code);
	});
}

// Spawn mocha
mocha = spawn("mocha", ['test/test.js']);

mocha.stdout.on('data', function (data) { 
	console.log((''+data).replace('\n', '')); 
});
mocha.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});
mocha.on('close', function (code) {
  console.log('child process exited with code ' + code);
	sel.kill();
	process.exit(0);
});