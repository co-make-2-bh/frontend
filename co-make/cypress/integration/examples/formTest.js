describe('REGISTER', () => {
    beforeEach(() => {
      // arbitrary code you want running
      // before each test
      cy.visit('http://localhost:3000/register')
    })

    const usernameInput = () => cy.get('input[name="username"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const phoneInput = () => cy.get('input[name="phone"]')
    const emailInput = () => cy.get('input[name="primaryemail"]')


    it('testing all inputs', () =>{
        usernameInput()
        .should('have.value', '')
        .type('newUser')
        .should('have.value', "newUser")

        passwordInput()
        .should('have.value', '')
        .type('password1')
        .should('have.value', "password1")

        phoneInput()
        .should('have.value', '')
        .type('1112223333')
        .should('have.value', "1112223333")

        emailInput()
        .should('have.value', '')
        .type('fake@fake.net')
        .should('have.value', "fake@fake.net")

        cy.get('.registerButton').click()

    })
})

describe('SIGN-IN', () => {
    beforeEach(() => {
      // arbitrary code you want running
      // before each test
      cy.visit('http://localhost:3000/')
    })

    const usernameInput = () => cy.get('input[name="username"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const phoneInput = () => cy.get('input[name="phone"]')
    const emailInput = () => cy.get('input[name="primaryemail"]')


    it('testing all inputs', () =>{
        usernameInput()
        .should('have.value', '')
        .type('newUser')
        .should('have.value', "newUser")

        passwordInput()
        .should('have.value', '')
        .type('password1')
        .should('have.value', "password1")

        phoneInput()
        .should('have.value', '')
        .type('1112223333')
        .should('have.value', "1112223333")

        emailInput()
        .should('have.value', '')
        .type('fake@fake.net')
        .should('have.value', "fake@fake.net")

        cy.get('button[type="submit"]').click()

    })
})