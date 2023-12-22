describe('Verifying Search Product', () => {

    it('Verify Search Product', () => {
        cy.visit('http://automationexercise.com')
        cy.get('header[id="header"] li:nth-child(1) a:nth-child(1)').should('be.visible')
        cy.get('a[href="/products"]').click()
        cy.get('.title.text-center').should('have.text','All Products')
        cy.get('#search_product').type('Blue Top')
        cy.get('.fa.fa-search').click()
        cy.get('a[href="/product_details/1"]').click
    })
})

