class CartPage {
    openCart() {
        cy.get('[data-test="nav-cart"]').click()
    }

    getCartItems() {
        return cy.get('[data-test="cart-item"]')
    }

    removeItem() {
        cy.get('[data-test="remove-item"]').first().click()
    }

    getEmptyCartMessage() {
        return cy.contains('Your cart is empty')
    }

    updateQuantity(quantity) {
        cy.get('[data-test="quantity"]').clear().type(quantity)
        cy.get('[data-test="update-quantity"]').click()
    }

    getQuantity() {
        return cy.get('[data-test="quantity"]')
    }

    proceedToCheckout() {
        cy.get('[data-test="proceed-checkout"]').click()
    }
}

module.exports = CartPage