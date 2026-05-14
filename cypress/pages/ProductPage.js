class ProductPage {
    visitHomePage() {
        cy.visit('https://practicesoftwaretesting.com/')
    }

    getProductList() {
    return cy.get('.card')  // or: cy.get('[data-test="product-item"]')
}

    clickFirstProduct() {
        cy.get('[data-test="product-card"]').first().click()
    }

    getProductDetails() {
        return cy.get('[data-test="product-name"]')
    }

    searchProduct(productName) {
        cy.get('[data-test="search-query"]').type(productName)
        cy.get('[data-test="search-submit"]').click()
    }

   getSearchResults() {
    return cy.get('.card')  // same fix
}

    addToCart() {
        cy.get('[data-test="add-to-cart"]').click()
    }

    getCartCount() {
        return cy.get('[data-test="cart-quantity"]')
    }
}

module.exports = ProductPage