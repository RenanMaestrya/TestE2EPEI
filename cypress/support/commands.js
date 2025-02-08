import "cypress-file-upload";

Cypress.Commands.add("login", (email, password) => {
  cy.visit("/accounts/login/");
  cy.get("input[name=login]").type(email);
  cy.get("input[name=password]").type(password);
  cy.get("button").contains("Entrar").click();
});

Cypress.Commands.add("filterOptions", () => {
  cy.get("button").contains("Filtrar").click();
});

// pegar o select e atribuir o valor de "Fundamentos de Lógica e Algoritmos"
Cypress.Commands.add("selectDiscipline", (selector) => {
  cy.get(`select[name=${selector}]`).select(
    "Fundamentos de Lógica e Algoritmos"
  );
});

// pegar o select do professor e atribuir o valor de "grupo5"
Cypress.Commands.add("selectTeacher", (selector) => {
  cy.get(`select[name=${selector}]`).select("grupo5");
});

// pegar o select do semestre e atribuir o valor de "1º Semestre"
Cypress.Commands.add("selectSemester", (selector) => {
  cy.get(`select[name=${selector}]`).select("1º Semestre");
});

// Pegar input apagar conteudo e escrever 2025
Cypress.Commands.add("selectYear", (selector) => {
  cy.get(`input[name=${selector}]`).clear().type("2025");
});

// Pegar select de status e atribuir o valor de
Cypress.Commands.add("selectStatus", (selector, value) => {
  cy.get(`select[name=${selector}]`).select(value);
});

//peagr select do setor e atribuir o valor
Cypress.Commands.add("selectSector", (selector, sector) => {
  cy.get(`select[name=${selector}]`).select(sector);
});

// Pegar select de grupo e atribuir o valor
Cypress.Commands.add("selectGroup", (selector, value) => {
  cy.get(`select[name=${selector}]`).select(value);
});

Cypress.Commands.add("navigateToAcademicsDashboard", (selector, value) => {
  cy.get('li > a[href="/academics/dashboard/"]').click();
  cy.url().should("include", "/academics/dashboard/");
});

// Navegar para criacao de cursos
Cypress.Commands.add("navigateToCreateCourse", () => {
  cy.navigateToAcademicsDashboard();
  cy.get('a[href="/academics/course/list/"]').click();
  cy.url().should("include", "/academics/course/list/");
  cy.get("a[href='/academics/course/create/']").click();
  cy.url().should("include", "/academics/course/create/");
});

// Navegar para criacao de disciplinas
Cypress.Commands.add("navigateToCreateDiscipline", () => {
  cy.navigateToAcademicsDashboard();
  cy.get('a[href="/academics/subjects/list/"]').click();
  cy.url().should("include", "/academics/subjects/list/");
  cy.get('a[href="/academics/subjects/create/"]').click();
  cy.url().should("include", "/academics/subjects/create/");
});

// Navegar para criacao de discentes
Cypress.Commands.add("navigateToCreateStudent", () => {
  cy.navigateToAcademicsDashboard();
  cy.get('a[href="/people/student/list/"]').click();
  cy.url().should("include", "/people/student/list/");
  cy.get('a[href="/people/student/create/"]').click();
  cy.url().should("include", "/people/student/create/");
});
