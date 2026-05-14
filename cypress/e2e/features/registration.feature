Feature: User Registration

  Scenario: Successful Registration
    Given user opens the registration page
    When user enters valid registration details
    And user submits the registration form
    Then user should be registered successfully

  Scenario: Registration with existing email
    Given user opens the registration page
    When user enters an already registered email
    And user submits the registration form
    Then user should see an error message