Feature: Checkout Process

  Scenario: Proceed to checkout
    Given user has items in the cart
    When user proceeds to checkout
    Then user should be on the checkout page

  Scenario: Complete purchase
    Given user is on the checkout page
    When user fills in billing details
    And user confirms the order
    Then user should see order confirmation