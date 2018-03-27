"use strict";

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');

defineSupportCode(function({Given, When, Then}) {
	Given(/^I am on the test page$/, function() {
		this.driver.get("http://opensource.demo.orangehrmlive.com/");
	});
	When(/^I enter my username "([^"]*)" and password "([^"]*)"$/, function(username, pass) {
		this.driver.findElement(By.css("#txtUsername")).sendKeys(username);
		this.driver.findElement(By.css("#txtPassword")).sendKeys(pass);
	});
	Then(/^I should login successfully$/, function() {
		this.driver.findElement(By.css("#btnLogin")).submit();
	});
});