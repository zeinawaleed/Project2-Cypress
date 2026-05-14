Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://practicesoftwaretesting.com/')
    cy.get('[data-test="nav-sign-in"]').click()
    cy.get('[data-test="email"]').type(email)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-submit"]').click()
})

Cypress.Commands.add('getByTestId', (testId) => {
    return cy.get(`[data-test="${testId}"]`)
})