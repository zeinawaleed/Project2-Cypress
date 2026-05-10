import LoginPage from '../pages/LoginPage'

const loginPage = new LoginPage()

describe('Login Tests', () => {

    beforeEach(() => {
        cy.visit('https://practicesoftwaretesting.com/')
    })

    it('Verify user can login', () => {

        cy.fixture('userData').then((data) => {

            loginPage.openLoginPage()

            loginPage.enterEmail(data.email)

            loginPage.enterPassword(data.password)

            loginPage.clickLogin()

            cy.contains('Jane Doe')

            cy.url().should('include', 'account')

            cy.get('[data-test="nav-menu"]').should('exist')

        })

    })

})