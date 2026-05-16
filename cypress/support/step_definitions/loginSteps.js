import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('user opens the login page', () => {

    cy.visit('https://practicesoftwaretesting.com/')

    cy.get('[data-test="nav-sign-in"]').click()

})

When('user enters valid email and password', () => {

    cy.fixture('userData').then((data) => {

        cy.get('#email').type(data.email)

        cy.get('#password').type(data.password)

    })

})

When('user enters invalid email and password', () => {

    cy.get('#email').type('wrong@test.com')

    cy.get('#password').type('wrongpassword')

})

When('clicks login button', () => {

    cy.get('[data-test="login-submit"]').click()

})

When('user clicks login button without credentials', () => {

    cy.get('[data-test="login-submit"]').click()

})

Then('user should login successfully', () => {

    cy.contains('Jane Doe')

})

Then('login error message should appear', () => {

    cy.contains('Invalid email or password')

})

Then('validation message should appear', () => {

    cy.get('#email').should('exist')

})