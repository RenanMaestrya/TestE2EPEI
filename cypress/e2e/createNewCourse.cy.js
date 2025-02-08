describe("Filtrar PEIs do professor pelo status", () => {
  beforeEach(() => {
    cy.login(Cypress.env("EMAIL_COORDINATOR"), Cypress.env("PASSWORD"));
    cy.url().should("include", "/");
  });

  it("Vai para pagina de acadêmicos", () => {
    cy.navigateToCreateCourse();
    cy.get('input[id="id_name"]').type("Curso de Teste");
    cy.get('select[id="id_period"]').select("Matutino");
    cy.get('select[id="id_duration_type"]').select("Anual");
    cy.get('input[name="number_of_periods"]').type("1");
    cy.get('select[id="id_course_type"]').select("Outros");
    cy.get("button").contains("Salvar").click();
  });
});
