const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const ContactPage = require("../../pages/ContactPage");
const contactPage = new ContactPage();

Given('user opens the contact page', () => {
    cy.visit('https://practicesoftwaretesting.com/')
    contactPage.openContactPage()
})

When('user fills in the contact form', () => {
    cy.fixture('userData').then((data) => {
        contactPage.enterFirstName(data.firstName)
        contactPage.enterLastName(data.lastName)
        contactPage.enterEmail(data.email)
        contactPage.enterSubject('webmaster')
        contactPage.enterMessage('This is a test message')
    })
})

When('user submits the contact form', () => {
    contactPage.submitForm()
})

When('user submits the contact form without filling fields', () => {
    contactPage.submitForm()
})

Then('user should see a success confirmation', () => {
    cy.contains('Message sent successfully').should('be.visible')  // or check actual text
})
Then('user should see validation errors', () => {
    contactPage.getValidationErrors().should('be.visible')
})