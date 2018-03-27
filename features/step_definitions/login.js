"use strict";

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');

defineSupportCode(function({Given, When, Then}) {
    Given(/^I want to sign in to my Outlook account$/, function() {
      setTimeout( () => {
        this.driver.get("https://outlook.live.com/owa/");
        this.driver.findElement(By.css("body > section > div > div.header > div.headerHero > div > div")).click();
      }, 2000);
    });

    When(/^I enter my email "([^"]*)"$/, function(email) {
      setTimeout( () => {
        this.driver.findElement(By.id("i0116")).sendKeys(email);
        this.driver.findElement(By.id("idSIButton9")).submit();
      }, 6000);
    });

    Then(/^my password "([^"]*)"$/, function(password) {
      setTimeout( () => {
        this.driver.findElement(By.id("i0118")).sendKeys(password);
        this.driver.findElement(By.id("idSIButton9")).submit();
      }, 10000);
    });
});