Feature: Product Browsing

  Scenario: View product list
    Given user is on the home page
    Then user should see a list of products

  Scenario: View product details
    Given user is on the home page
    When user clicks on a product
    Then user should see product details

  Scenario: Search for a product
    Given user is on the home page
    When user searches for "hammer"
    Then user should see search results