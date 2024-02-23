describe('My First Test', () => {

    it('Verify title - correct', () => {
        cy.visit("https://helium-eeac7.web.app/signin")
        cy.title().should('eq','NAA Watermains')
    })

    it('Verify title - incorrect', () => {
        cy.visit("https://helium-eeac7.web.app/signin")
        cy.title().should('eq','NAA Watermains123')
      })

    
  })