Cypress.Commands.add('login', (email, password) => {
    cy.get('[data-test="nav-sign-in"]').click()

    cy.get('#email').type(email)
    cy.get('#password').type(password)

    cy.get('[data-test="login-submit"]').click()
})

Cypress.Commands.add('searchProduct', (product) => {
    cy.get('[data-test="search-query"]').type(product)
    cy.get('[data-test="search-submit"]').click()
})

Cypress.Commands.add('addHammerToCart', () => {
    cy.contains('Thor Hammer').click()
    cy.get('[data-test="add-to-cart"]').click()
})