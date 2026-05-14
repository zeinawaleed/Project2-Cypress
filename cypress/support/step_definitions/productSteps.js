const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const ProductPage = require("../../pages/ProductPage");
const productPage = new ProductPage();

Given('user is on the home page', () => {
    productPage.visitHomePage()
})

Given('user is on a product page', () => {
    productPage.visitHomePage()
    productPage.clickFirstProduct()
})

When('user clicks on a product', () => {
    productPage.clickFirstProduct()
})

When('user searches for {string}', (productName) => {
    productPage.searchProduct(productName)
})

When('user adds the product to cart', () => {
    productPage.addToCart()
})

Then('user should see a list of products', () => {
    productPage.getProductList().should('have.length.greaterThan', 0)
})

Then('user should see product details', () => {
    productPage.getProductDetails().should('be.visible')
})

Then('user should see search results', () => {
    productPage.getSearchResults().should('have.length.greaterThan', 0)
})

Then('the cart should contain the product', () => {
    productPage.getCartCount().should('contain', '1')
})