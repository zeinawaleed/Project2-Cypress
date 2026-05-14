class AccountPage {
    openProfile() {
        cy.get('[data-test="nav-profile"]').click()
    }

    getProfileDetails() {
        return cy.get('[data-test="profile-name"]')
    }

    openChangePassword() {
        cy.get('[data-test="change-password"]').click()
    }

    enterNewPassword(password) {
        cy.get('[data-test="new-password"]').type(password)
        cy.get('[data-test="confirm-password"]').type(password)
    }

    savePassword() {
        cy.get('[data-test="save-password"]').click()
    }

    getPasswordSuccess() {
        return cy.contains('Password updated')
    }

    logout() {
        cy.get('[data-test="nav-menu"]').click()
        cy.get('[data-test="nav-sign-out"]').click()
    }

    getLoginButton() {
        return cy.get('[data-test="nav-sign-in"]')
    }
}

module.exports = AccountPage