"use strict";

var {defineSupportCode} = require('cucumber');
var {Builder, By, until} = require('selenium-webdriver');
var platform = process.env.PLATFORM || "CHROME"

var buildAndroidDriver = function() {
	return new Builder().
	usingServer("http://localhost:4723/wd/hub").
	withCapabilities({
		platformName: 'Android',
		deviceName: 'Android device',
		browserName: 'Chrome'
	}).build();
}

var buildChromeDriver = function() {
	return new Builder().forBrowser('chrome').build();
}

var buildFirefoxDriver = function() {
	return new Builder().forBrowser('firefox').build();
}

var buildDriver = function() {
	switch(platform) {
		case 'ANDROID':
			return buildAndroidDriver();
		case 'CHROME':
			return buildChromeDriver();
		case 'FIREFOX':
			return buildFirefoxDriver();
		default:
			return buildChromeDriver();	
	}
}

var World = function World() {
	this.driver = buildDriver();
}

// var RestfulWorld = function RestfulWorld(callback) {
// 	var self = this;
// 	this.lastResponse = null;


// }

defineSupportCode(function({setWorldConstructor}) {
	setWorldConstructor(World);
});