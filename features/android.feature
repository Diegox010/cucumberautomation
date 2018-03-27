Feature: Android test
	As a developer
	I want to run webdriver tests
	using Appium

	Scenario: Login to test page
		Given I am on the test page
		When I enter my username "admin" and password "admin"
		Then I should login successfully