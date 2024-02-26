
import Login from "../POM/LoginPage.js";

describe('NAA Login Test', () => {

    it.only('Login Correct credentials', () => {

        cy.visit("https://naa-staging-portal.web.app/signin")

        cy.fixture('NAA').then((data) => {

            const ln = new Login();
            ln.setEmail(data.email)
            ln.setPassword(data.password)
            ln.clickLogin();


            //SAMPLE ASSERTIONS
            cy.url().should('include','naa-staging-portal.web.app')
            .and('eq', 'https://naa-staging-portal.web.app/owners')
            .and('contain', 'owners')
            .and('not.contain','ownerx')
            

            //LOGO VISIBILITY
            cy.get('[src="/assets/logo.6a4f3dcf.png"]').should('be.visible') 
            .and('exist')
        })




    })

    // it('Verify title - incorrect', () => {
    //     cy.visit("https://helium-eeac7.web.app/signin")
    //     cy.title().should('eq', 'NAA Watermains123')
    // })


})