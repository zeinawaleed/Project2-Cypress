class LoginPage {

    openLoginPage() {
        cy.get('[data-test="nav-sign-in"]').click()
    }

    enterEmail(email) {
        cy.get('#email').type(email)
    }

    enterPassword(password) {
        cy.get('#password').type(password)
    }

    clickLogin() {
        cy.get('[data-test="login-submit"]').click()
    }

}

export default LoginPage