import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('user opens product page', () => {

    cy.visit('https://practicesoftwaretesting.com/')

    cy.contains('Thor Hammer').click()

})

When('user adds product to cart', () => {

    cy.get('[data-test="add-to-cart"]').click()

})

Then('product should be added successfully', () => {

    cy.contains('Product added to shopping cart.')

})

Then('cart icon should be visible', () => {

    cy.get('[data-test="nav-cart"]').should('be.visible')

})

Given('user clicks cart button', () => {

    cy.visit('https://practicesoftwaretesting.com/')

    cy.get('[data-test="nav-cart"]').click()

})

Then('cart page should open', () => {

    cy.url().should('include', 'checkout')

})