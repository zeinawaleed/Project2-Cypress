class ContactPage {
    openContactPage() {
        cy.get('[data-test="nav-contact"]').click()
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

    enterMessage(message) {
        cy.get('[data-test="message"]').type(message)
    }

    enterSubject(subject) {
        cy.get('[data-test="subject"]').select(subject)
    }

    submitForm() {
        cy.get('[data-test="contact-submit"]').click()
    }

    getSuccessMessage() {
        return cy.contains('Thanks for your message')
    }

    getValidationErrors() {
        return cy.get('.alert-danger')
    }
}

module.exports = ContactPage
