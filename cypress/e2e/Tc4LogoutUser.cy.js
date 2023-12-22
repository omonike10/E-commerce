describe('Login User with incorrect email and password', ()=> {
    it('User login with incorrect email and password', ()=> {
        cy.visit('http://automationexercise.com')
        cy.get('a[href="/login"]').click()
        cy.get('input[data-qa="login-email"]').type('newuser001@gmail.com')
        cy.get('input[placeholder="Password"]').type('12345')
        cy.get('button[data-qa="login-button"]').click()
        cy.get('a[href="/logout"]').click()
    })
})