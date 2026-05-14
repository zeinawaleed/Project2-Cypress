class LoginPage {
    // your methods here...
    openLoginPage() {
        cy.get('[data-test="nav-sign-in"]').click()
    }
    
    enterEmail(email) {
        cy.get('[data-test="email"]').type(email)
    }
    
    enterPassword(password) {
        cy.get('[data-test="password"]').type(password)
    }
    
    clickLogin() {
        cy.get('[data-test="login-submit"]').click()
    }
}

// MUST export like this for CommonJS require()
module.exports = LoginPage