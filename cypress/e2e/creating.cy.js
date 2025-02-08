describe("Filtrar PEIs do professor pelo status", () => {
  beforeEach(() => {
    cy.login(Cypress.env("EMAIL_COORDINATOR"), Cypress.env("PASSWORD"));
    cy.url().should("include", "/");
  });

  it("Cria um novo curso", () => {
    cy.navigateToCreateCourse();
    cy.get('input[id="id_name"]').type("Curso de Teste");
    cy.get('select[id="id_period"]').select("Matutino");
    cy.get('select[id="id_duration_type"]').select("Anual");
    cy.get('input[name="number_of_periods"]').type("1");
    cy.get('select[id="id_course_type"]').select("Outros");
    cy.get("button").contains("Salvar").click();
  });

  it("Cria uma nova disciplina", () => {
    cy.navigateToCreateDiscipline();
    cy.get('input[name="name"]').type("Programação Orientada a Objetos");
    cy.get('label[for="1"]').click();
    cy.get('label[for="Semestral"]').click();
    cy.get('textarea[id="id_objective"]').type("Objetivo de teste");
    cy.get('textarea[id="id_content"]').type("Descrição de teste");
    cy.get('textarea[id="id_methodology"]').type("Metodologia de teste");
    cy.get('textarea[id="id_resources"]').type("Recursos ditáticos de teste");
    cy.get('textarea[id="id_assessments"]').type("Avaliação de teste");
    cy.get("button").contains("Salvar").click();
  });
});
