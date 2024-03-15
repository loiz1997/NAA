
describe('Alerts', ()=>{


    it('Js Alert', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');

        })

        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })


    it('Js confirm Alert - OK', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');

        })

        //cypress automatically closes window using OK button

        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it.only('Js confirm Alert - CANCEL', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');

        })

        cy.on('window:confirm',()=> false); //cypress closes window using cancel button
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

})