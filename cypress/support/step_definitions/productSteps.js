import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('user is on homepage', () => {

    cy.visit('https://practicesoftwaretesting.com/')

})

When('user clicks on Thor Hammer product', () => {

    cy.contains('Thor Hammer').click()

})

Then('product details page should open', () => {

    cy.url().should('include', 'product')

})

Given('user opens Thor Hammer product', () => {

    cy.visit('https://practicesoftwaretesting.com/')

    cy.contains('Thor Hammer').click()

})

Then('product name should be visible', () => {

    cy.contains('Thor Hammer')

})

Then('product price should be visible', () => {

    cy.contains('$')

})

When('user clicks add to cart button', () => {

    cy.get('[data-test="add-to-cart"]').click()

})

Then('product should be added successfully', () => {

    cy.contains('Product added to shopping cart.')

})



Then('product image should be visible', () => {

    cy.get('img').should('be.visible')

})

When('user increases product quantity', () => {

    cy.get('#quantity').clear().type('2')

})


Then('add to cart button should be visible', () => {

    cy.get('[data-test="add-to-cart"]').should('be.visible')

})

When('user clicks browser back button', () => {

    cy.go('back')

})

Then('homepage should appear', () => {

    cy.url().should('eq', 'https://practicesoftwaretesting.com/')

})

Then('URL should contain product', () => {

    cy.url().should('include', 'product')

})