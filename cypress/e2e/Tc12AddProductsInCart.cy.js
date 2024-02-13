describe('Verifying Subscription in home page', () => {

    it('Verify Subscription in home page', () => {
        cy.visit('http://automationexercise.com')
        cy.get('header[id="header"] li:nth-child(1) a:nth-child(1)').should('be.visible')
       cy.get("a[href='/products']").click()
     cy.get("a[href='/product_details/1']").click()
     cy.get("button[type='button']").click()
     cy.get(".modal-title.w-100").should('have.text','Added!')
     cy.get(".btn.btn-success.close-modal.btn-block").click()
     cy.get("a[href='/products']").click()
     cy.get("a[href='/product_details/4']").click()
     cy.get("button[type='button']").click()
     cy.get('u').click()
     cy.get("a[href='/product_details/1']").should('have.text','Blue Top')
     cy.get("a[href='/product_details/4']").should('have.text','Stylish Dress')
    })

})
