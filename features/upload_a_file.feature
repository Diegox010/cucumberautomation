Feature: Upload a file to Mega
	As a developer
	I want to upload a file
	to test different methods of Webdriver

	Scenario: Upload an image
		Given I'm logged into my pyroute Mega account
		When I upload an image from "/home/enroute/Pictures/Memes/morena.jpg"
		Then it should close