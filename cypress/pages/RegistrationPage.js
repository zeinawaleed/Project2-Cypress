class RegistrationPage {
   openRegistrationPage() {
    cy.get('[data-test="nav-register"]').click()
    }

    enterFirstName(firstName) {
        cy.get('[data-test="first-name"]').type(firstName)
    }

    enterLastName(lastName) {
        cy.get('[data-test="last-name"]').type(lastName)
    }

    enterEmail(email) {
        cy.get('[data-test="email"]').type(email)
    }

    enterPassword(password) {
        cy.get('[data-test="password"]').type(password)
    }

    submitRegistration() {
        cy.get('[data-test="register-submit"]').click()
    }

    getErrorMessage() {
        return cy.get('.alert-danger')
    }
}

module.exports = RegistrationPage