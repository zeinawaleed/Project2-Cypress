Feature: Shopping Cart

  Scenario: Add product to cart
    Given user is on a product page
    When user adds the product to cart
    Then the cart should contain the product

  Scenario: Remove product from cart
    Given user has a product in the cart
    When user removes the product from cart
    Then the cart should be empty

  Scenario: Update product quantity in cart
    Given user has a product in the cart
    When user updates the quantity to 3
    Then the cart should show quantity 3