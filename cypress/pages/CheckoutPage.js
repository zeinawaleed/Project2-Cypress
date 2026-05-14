class CheckoutPage {
    getCheckoutTitle() {
        return cy.contains('Checkout')
    }

    enterBillingDetails(details) {
        cy.get('[data-test="address"]').type(details.address)
        cy.get('[data-test="city"]').type(details.city)
        cy.get('[data-test="zip"]').type(details.zip)
    }

    confirmOrder() {
        cy.get('[data-test="confirm-order"]').click()
    }

    getOrderConfirmation() {
        return cy.contains('Order confirmed')
    }
}

module.exports = CheckoutPage