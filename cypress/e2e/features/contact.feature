Feature: Contact Form

  Scenario: Send contact message
    Given user opens the contact page
    When user fills in the contact form
    And user submits the contact form
    Then user should see a success confirmation

  Scenario: Send contact message with empty fields
    Given user opens the contact page
    When user submits the contact form without filling fields
    Then user should see validation errors