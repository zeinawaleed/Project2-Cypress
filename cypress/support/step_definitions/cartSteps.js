const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const ProductPage = require("../../pages/ProductPage");
const CartPage = require("../../pages/CartPage");
const productPage = new ProductPage();
const cartPage = new CartPage();

Given('user has a product in the cart', () => {
    productPage.visitHomePage()
    productPage.clickFirstProduct()
    productPage.addToCart()
    cartPage.openCart()
})

Given('user has items in the cart', () => {
    productPage.visitHomePage()
    productPage.clickFirstProduct()
    productPage.addToCart()
})

When('user removes the product from cart', () => {
    cartPage.removeItem()
})

When('user updates the quantity to {int}', (quantity) => {
    cartPage.updateQuantity(quantity)
})

When('user proceeds to checkout', () => {
    cartPage.proceedToCheckout()
})

Then('the cart should be empty', () => {
    cartPage.getEmptyCartMessage().should('be.visible')
})

Then('the cart should show quantity {int}', (quantity) => {
    cartPage.getQuantity().should('have.value', quantity)
})