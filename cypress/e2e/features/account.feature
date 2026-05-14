Feature: User Account

  Scenario: View profile information
    Given user is logged in
    When user navigates to profile page
    Then user should see profile details

  Scenario: Change password
    Given user is logged in
    When user changes the password
    Then password should be updated successfully

  Scenario: Logout
    Given user is logged in
    When user clicks logout
    Then user should be logged out successfully