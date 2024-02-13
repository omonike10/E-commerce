describe('Verifying Subscription in home page', () => {

    it('Verify Subscription in home page', () => {
        cy.visit('http://automationexercise.com')
        cy.get('header[id="header"] li:nth-child(1) a:nth-child(1)').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
       // .scrollTo('bottom', { ensureScrollable: false })
     cy.get('div[class="single-widget"] h2').should('have.text','Subscription')
      cy.get('#susbscribe_email').type('newuser001@gmail.com')
      cy.get('#subscribe > .fa').click()
    })
})
