describe('User Login', () => {

    it('Login the user', () => {
        cy.visit('http://automationexercise.com')
        cy.fixture('login.json').then((loginData) => {
            const { emailAddress, password } = loginData.loginUser;
            cy.get('a[href="/login"]').click()
           cy.get('input[data-qa="login-email"]').type(emailAddress)
            cy.get('input[placeholder="Password"]').type(password)
            cy.get('button[data-qa="login-button"]').click()
            cy.get('a[href="/logout"]').click()
            //cy.get('a[href="/delete_account"]').click()
            //cy.get('b').should('have.text','ACCOUNT DELETED!')
        })
    })

})
 


