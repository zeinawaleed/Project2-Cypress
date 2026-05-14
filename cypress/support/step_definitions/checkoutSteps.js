const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const CheckoutPage = require("../../pages/CheckoutPage");
const checkoutPage = new CheckoutPage();

Given('user is on the checkout page', () => {
    // Assumes previous steps navigated here
})

When('user fills in billing details', () => {
    checkoutPage.enterBillingDetails({
        address: '123 Test St',
        city: 'Test City',
        zip: '12345'
    })
})

When('user confirms the order', () => {
    checkoutPage.confirmOrder()
})

Then('user should be on the checkout page', () => {
    checkoutPage.getCheckoutTitle().should('be.visible')
})

Then('user should see order confirmation', () => {
    checkoutPage.getOrderConfirmation().should('be.visible')
})