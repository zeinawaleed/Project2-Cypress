import LoginPage from '../pages/LoginPage'

const loginPage = new LoginPage()

describe('Practice Software Testing Website', () => {

    beforeEach(() => {
        cy.visit('https://practicesoftwaretesting.com/')
    })

    it.only('Verify homepage loads correctly', () => {

        cy.contains('Practice Software Testing')

        cy.url().should('include', 'practicesoftwaretesting')

        cy.get('[data-test="search-query"]').should('be.visible')

    })

    it('Verify search works correctly', () => {

        cy.get('[data-test="search-query"]').type('Hammer')

        cy.contains('Hammer')

        cy.get('.card').should('exist')

        cy.url().should('include', 'practicesoftwaretesting')

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

    it('Verify add to cart works', () => {

        cy.contains('Thor Hammer').click()

        cy.get('[data-test="add-to-cart"]').click()

        cy.contains('Product added to shopping cart.')

        cy.get('[data-test="nav-cart"]').should('exist')

        cy.url().should('include', 'product')

    })

    it('Verify category filter works', () => {

        cy.contains('Hand Tools').click()

        cy.url().should('include', 'category')

        cy.get('.card').should('exist')

        cy.contains('Hand Tools')

    })

    it('Verify price slider exists', () => {

        cy.contains('Price Range')

        cy.get('input[type="range"]').should('exist')

        cy.get('input[type="range"]').should('be.visible')

        cy.url().should('include', 'practicesoftwaretesting')

    })

    it('Verify invalid search shows no results', () => {

        cy.get('[data-test="search-query"]').type('abcdefgh')

        cy.contains('There are no products found.')

        cy.get('.card').should('not.exist')

        cy.url().should('include', 'practicesoftwaretesting')

    })

    it('Verify navbar appears', () => {

        cy.get('.navbar').should('exist')

        cy.get('.navbar').should('be.visible')

        cy.contains('Sign in')

    })

    it('Verify product details page opens', () => {

        cy.contains('Thor Hammer').click()

        cy.url().should('include', 'product')

        cy.contains('Thor Hammer')

        cy.get('[data-test="add-to-cart"]').should('exist')

    })

    it('Verify sign in button exists', () => {

        cy.get('[data-test="nav-sign-in"]').should('exist')

        cy.get('[data-test="nav-sign-in"]').should('be.visible')

        cy.contains('Sign in')

    })

    it('Verify categories section exists', () => {

        cy.contains('Categories')

        cy.get('.checkbox').should('exist')

        cy.get('.checkbox').should('be.visible')

        cy.url().should('include', 'practicesoftwaretesting')

    })

    it('Verify contact page opens', () => {

        cy.contains('Contact').click()

        cy.url().should('include', 'contact')

        cy.contains('Contact')

        cy.get('form').should('exist')

    })

    it('Verify sort dropdown exists', () => {

        cy.get('[data-test="sort"]').should('exist')

        cy.get('[data-test="sort"]').should('be.visible')

        cy.url().should('include', 'practicesoftwaretesting')

    })

    it('Verify cart button exists', () => {

        cy.get('[data-test="nav-cart"]').should('exist')

        cy.get('[data-test="nav-cart"]').should('be.visible')

        cy.url().should('include', 'practicesoftwaretesting')

    })

    it('Verify footer exists', () => {

        cy.get('footer').should('exist')

        cy.get('footer').should('be.visible')

        cy.contains('Practice Software Testing')

    })

})