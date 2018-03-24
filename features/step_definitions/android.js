"use strict";

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');

defineSupportCode(function({Given, When, Then}) {
	Given(/^I am on the Google page$/, function() {
		this.driver.get("https://www.google.com.mx");
	});
});