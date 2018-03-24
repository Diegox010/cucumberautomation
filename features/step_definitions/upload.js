"use strict";

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');

defineSupportCode(function({Given, When, Then}) {
	Given(/^I'm logged into my pyroute Mega account$/, function() {
		this.driver.get("https://mega.nz/login");
		this.driver.findElement(By.id("login-name2")).sendKeys("pyroutedemo@hotmail.com");
		this.driver.findElement(By.id("login-password2")).sendKeys("$uper;Pa$$worD042*&!dFiA@#");
		this.driver.findElement(By.css("#login_form > div.new-registration-checkbox > div.register-st2-button.active > div")).click();
	});
	When(/^I upload an image from "([^"]*)"$/, function(path) { 
		this.driver.findElement(By.id("fileselect1")).clear();
		this.driver.findElement(By.id("fileselect1")).sendKeys(path);
	});
	Then(/^it should close$/, function() {
		this.driver.quit();
	});
});