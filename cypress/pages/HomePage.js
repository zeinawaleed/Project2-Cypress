class HomePage {

    searchProduct(product) {
        cy.get('[data-test="search-query"]').type(product)
        cy.get('[data-test="search-submit"]').click()
    }

    clickThorHammer() {
        cy.contains('Thor Hammer').click()
    }

}

export default HomePage