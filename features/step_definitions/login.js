"use strict";

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');

const TESTTIME = 20000;

defineSupportCode(function({Given, When, Then}) {
    Given(/^I want to sign in to my Outlook account$/, function() {
        this.driver.get("https://outlook.live.com/owa/");
        this.driver.wait(until.elementLocated(By.css("body > section > div > div.header > div.headerHero > div > div")), TESTTIME).then(function() {
            this.driver.findElement(By.css("body > section > div > div.header > div.headerHero > div > div")).click();
        }.bind(this));
    });

    When(/^I enter my email "([^"]*)"$/, function(email) {
        this.driver.wait(until.elementLocated(By.id("i0116")), TESTTIME).then(function() {
            this.driver.findElement(By.id("i0116")).sendKeys(email);
            this.driver.findElement(By.id("idSIButton9")).click();
        }.bind(this));
    });

    Then(/^my password "([^"]*)"$/, function(password) {
        this.driver.wait(until.elementLocated(By.id("i0118")), TESTTIME).then(function() {
            this.driver.findElement(By.id("i0118")).sendKeys(password);
            this.driver.findElement(By.id("idSIButton9")).submit();
        }.bind(this));
    });
});