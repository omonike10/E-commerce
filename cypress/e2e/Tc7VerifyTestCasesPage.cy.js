describe('Verifying Test Cases Page', () => {

    it('Verify Test Cases Page', () => {
        cy.visit('http://automationexercise.com')
        cy.get('header[id="header"] li:nth-child(1) a:nth-child(1)').should('be.visible')
        cy.get(':nth-child(5) > a > .fa').click()
        cy.get('h2[class="title text-center"] b').should('have.text', 'Test Cases')
    })
})


