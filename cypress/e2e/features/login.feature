Feature: Login Functionality

Scenario: Successful Login
Given user opens the login page
When user enters valid email and password
And clicks login button
Then user should login successfully

Scenario: Invalid Login
Given user opens the login page
When user enters invalid email and password
And clicks login button
Then login error message should appear

Scenario: Empty Login Fields
Given user opens the login page
When user clicks login button without credentials
Then validation message should appear