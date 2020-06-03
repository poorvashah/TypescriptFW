Feature: validate calculator 

Scenario: calc add func testing

Given I will navigate to calc site
When I add two numbers "3" and "5"
Then the output should be displayed as "8"
