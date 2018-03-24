Feature: Login to save your job
	As an almost unemployed man
	I must be able to test webdriver with cucumber-js
	In order to keep my current job

	Scenario: Log into my sullexis account
		Given I want to sign in to my Outlook account
		When I enter my email "your@email.com"
		Then my password "yourpassword"