describe('Verify All Products and product detail page', () => {

    it('Verifying All Products and product detail page', () => {
        cy.visit('http://automationexercise.com')
        cy.get('header[id="header"] li:nth-child(1) a:nth-child(1)').should('be.visible')
        cy.get('a[href="/products"]').click()
        cy.get('#sale_image').should('be.visible')
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa').click()
        cy.get('a[href="/category_products/1"]').click()
        cy.get('a[href="/product_details/38"]').click()
        cy.get('#quantity')
            .clear()
            .type(3)
        cy.get('#quantity')
            .type('{uparrow}')
            .type('{uparrow}')
        cy.get('#quantity')
            .type('{downarrow}')
            cy.get(':nth-child(5) > .btn').click()
            cy.get('.modal-title.w-100').should('have.text','Added!')
            cy.get('.btn.btn-success.close-modal.btn-block').click()
            cy.get('#name').type('newuser001')
            cy.get('#email').type('newuser001@gmail.com')
            cy.get('#review').type('This is an awesome page!!!')
            cy.get('#button-review').click()
    })
})


