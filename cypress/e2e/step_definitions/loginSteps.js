import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from '../../pages/LoginPage'

const loginPage = new LoginPage()

Given('user opens the login page', () => {

    cy.visit('https://practicesoftwaretesting.com/')

    loginPage.openLoginPage()

})

When('user enters valid email and password', () => {

    cy.fixture('userData').then((data) => {

        loginPage.enterEmail(data.email)

        loginPage.enterPassword(data.password)

    })

})

When('clicks login button', () => {

    loginPage.clickLogin()

})

Then('user should login successfully', () => {

    cy.contains('Jane Doe')

    cy.url().should('include', 'account')

    cy.get('[data-test="nav-menu"]').should('exist')

})