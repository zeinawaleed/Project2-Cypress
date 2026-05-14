const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const LoginPage = require("../../pages/LoginPage");
const AccountPage = require("../../pages/AccountPage");
const loginPage = new LoginPage();
const accountPage = new AccountPage();

Given('user is logged in', () => {
    cy.visit('https://practicesoftwaretesting.com/')
    loginPage.openLoginPage()
    cy.fixture('userData').then((data) => {
        loginPage.enterEmail(data.email)
        loginPage.enterPassword(data.password)
        loginPage.clickLogin()
    })
})

When('user navigates to profile page', () => {
    accountPage.openProfile()
})

When('user changes the password', () => {
    accountPage.openChangePassword()
    accountPage.enterNewPassword('NewPassword123!')
    accountPage.savePassword()
})

When('user clicks logout', () => {
    accountPage.logout()
})

Then('user should see profile details', () => {
    accountPage.getProfileDetails().should('be.visible')
})

Then('password should be updated successfully', () => {
    accountPage.getPasswordSuccess().should('be.visible')
})

Then('user should be logged out successfully', () => {
    accountPage.getLoginButton().should('be.visible')
})