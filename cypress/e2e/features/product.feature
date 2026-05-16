Feature: Product Functionality

Scenario: Open Product Details Page
Given user is on homepage
When user clicks on Thor Hammer product
Then product details page should open

Scenario: Product Name Is Visible
Given user opens Thor Hammer product
Then product name should be visible

Scenario: Product Price Is Visible
Given user opens Thor Hammer product
Then product price should be visible

Scenario: Add Product To Cart
Given user opens Thor Hammer product
When user clicks add to cart button
Then product should be added successfully


Scenario: Product Image Exists
Given user opens Thor Hammer product
Then product image should be visible



Scenario: Product Add To Cart Button Exists
Given user opens Thor Hammer product
Then add to cart button should be visible

Scenario: Navigate Back To Homepage
Given user opens Thor Hammer product
When user clicks browser back button
Then homepage should appear

Scenario: Product URL Is Correct
Given user opens Thor Hammer product
Then URL should contain product