import dotenv from 'dotenv'

dotenv.config()

describe('Login com sucesso', () => {
  it('login de professor com usuario e senha com sucesso', () => {
    cy.login(Cypress.env('EMAIL_TEACHER'), Cypress.env('PASSWORD'))

    cy.url().should('include', '/')
  })
})