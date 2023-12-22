describe('User Registration', () => {
    it('Registering the user', () => {
        cy.visit('http://automationexercise.com')
        const randomName = `user_${Math.floor(Math.random() * 10000)}nike`;
        const randomEmail = `Pass${Math.floor(Math.random() * 100000)}@email.com`;
        cy.get('div[class="item active"] span:nth-child(1)').should('have.text', 'Automation')
        cy.get('a[href="/login"]').click()
        cy.get('input[placeholder="Name"]').type(randomName)
        cy.get('input[data-qa="signup-email"]').type(randomEmail)
        cy.get('button[data-qa="signup-button"]').click()
        cy.get('#id_gender2').click()
        cy.get('#password').type(12345)
        cy.get('#days').select(10)
        cy.get('#months').select('May')
        cy.get('#years').select('2021')
        cy.get('#newsletter').click()
        cy.get('#optin').click()
        cy.get('#first_name').type('Emoke')
        cy.get('#last_name').type('Nitus')
        cy.get('#company').type('Bangola')
        cy.get('#address1').type('paulina street 22')
        cy.get('#address2').type('paul street 27')
        cy.get('#country').select('Singapore')
        cy.get('#state').type('Panadra')
        cy.get('#city').type('Pantus')
        cy.get('#zipcode').type('11234')
        cy.get('#mobile_number').type('+1234567891')
        cy.get('button[data-qa="create-account"]').click()
        cy.get('h2[class="title text-center"] b').should('have.text', 'Account Created!')
        cy.get('.btn.btn-primary').click()
        cy.get('a[href="/logout"]').click()
       
    })
})


