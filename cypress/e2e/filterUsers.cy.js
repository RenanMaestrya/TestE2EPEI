describe("Gerenciar acesso de usuários", () => {
  beforeEach(() => {
    cy.login(Cypress.env("EMAIL_COORDINATOR"), Cypress.env("PASSWORD"));
    cy.url().should("include", "/");
  });

  it("Filtrar usuários pelo coordenador", () => {
    cy.get('li > a[href="/users/list/"]').click();
    cy.url().should("include", "/users/list/");
    cy.get("input[name='name']").type("coordenador");
    cy.get("input[name='email']").type(Cypress.env("EMAIL_COORDINATOR"));
    cy.selectSector("sector", "NAPNE");
    cy.selectGroup("group", "Coordenador");
    cy.filterOptions();
  });

  it("Filtrar usuários pelo professor", () => {
    cy.get('li > a[href="/users/list/"]').click();
    cy.url().should("include", "/users/list/");
    cy.get("input[name='name']").type("professor");
    cy.get("input[name='email']").type(Cypress.env("EMAIL_TEACHER"));
    cy.selectSector("sector", "NAPNE");
    cy.selectGroup("group", "Professor");
    cy.filterOptions();
  });
});
