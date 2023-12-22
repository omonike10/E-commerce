describe('Login User with incorrect email and password', ()=> {
    it('User login with incorrect email and password', ()=> {
        cy.visit('http://automationexercise.com')
        cy.get('a[href="/login"]').click()
        cy.get('input[placeholder="Name"]').type('newuser001')
        cy.get('input[data-qa="signup-email"]').type('newuser001@gmail.com')
        cy.get('button[data-qa="signup-button"]').click() 
        cy.get('.signup-form > form > p').should('have.text','Email Address already exist!')  
    })
})