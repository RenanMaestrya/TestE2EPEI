describe("Filtrar PEIs do professor pelo status", () => {
  beforeEach(() => {
    cy.login(Cypress.env("EMAIL_TEACHER"), Cypress.env("PASSWORD"));
    cy.url().should("include", "/");
  });
  it("Filtrar PEIs pelo status de Não iniciado", () => {
    cy.selectDiscipline("subject");
    cy.selectTeacher("teacher");
    cy.selectSemester("semester");
    cy.selectYear("year");
    cy.selectStatus("status", "Não iniciado");
    cy.filterOptions();
  });

  it("Filtrar PEIs pelo status de Em andamento", () => {
    cy.selectDiscipline("subject");
    cy.selectTeacher("teacher");
    cy.selectSemester("semester");
    cy.selectYear("year");
    cy.selectStatus("status", "Em andamento");
    cy.filterOptions();
  });

  it("Filtrar PEIs pelo status de Finalizado", () => {
    cy.selectDiscipline("subject");
    cy.selectTeacher("teacher");
    cy.selectSemester("semester");
    cy.selectYear("year");
    cy.selectStatus("status", "Finalizado");
    cy.filterOptions();
  });

  it("Filtrar PEIs pelo status de Preenchido", () => {
    cy.selectDiscipline("subject");
    cy.selectTeacher("teacher");
    cy.selectSemester("semester");
    cy.selectYear("year");
    cy.selectStatus("status", "Preenchido");
    cy.filterOptions();
  });
});
