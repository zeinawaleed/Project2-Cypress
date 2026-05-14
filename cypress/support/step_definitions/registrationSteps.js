const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const RegistrationPage = require("../../pages/RegistrationPage");
const registrationPage = new RegistrationPage();

Given('user opens the registration page', () => {
    cy.visit('https://practicesoftwaretesting.com/')
    registrationPage.openRegistrationPage()
})

When('user enters valid registration details', () => {
    cy.fixture('userData').then((data) => {
        registrationPage.enterFirstName(data.firstName)
        registrationPage.enterLastName(data.lastName)
        registrationPage.enterEmail(data.newEmail)
        registrationPage.enterPassword(data.password)
    })
})

When('user enters an already registered email', () => {
    cy.fixture('userData').then((data) => {
        registrationPage.enterFirstName(data.firstName)
        registrationPage.enterLastName(data.lastName)
        registrationPage.enterEmail(data.email)
        registrationPage.enterPassword(data.password)
    })
})

When('user submits the registration form', () => {
    registrationPage.submitRegistration()
})

Then('user should be registered successfully', () => {
    cy.url().should('include', 'login')
    cy.contains('Login')
})

Then('user should see an error message', () => {
    registrationPage.getErrorMessage().should('be.visible')
})