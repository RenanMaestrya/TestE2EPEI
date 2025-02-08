// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

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

// Navegar para criacao de cursos
Cypress.Commands.add("navigateToCreateCourse", () => {
  cy.get('li > a[href="/academics/dashboard/"]').click();
  cy.url().should("include", "/academics/dashboard/");
  cy.get('a[href="/academics/course/list/"]').click();
  cy.url().should("include", "/academics/course/list/");
  cy.get("a[href='/academics/course/create/']").click();
  cy.url().should("include", "/academics/course/create/");
});
