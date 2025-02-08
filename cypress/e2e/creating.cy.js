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

  it("Cria um novo discente", () => {
    cy.navigateToCreateStudent();
    cy.get('input[id="id_image"]').attachFile("feliz.jpg");
    cy.get('input[id="id_name"]').type("Jacinto");
    cy.get('input[id="id_email"]').type("juvenal@teste.com");
    cy.get('select[id="id_course"]').select(
      "Alimentos Técnico Integrado - Noturno"
    );
    cy.get("input[id=id_registration]").type("123456789");
    cy.get('input[id="id_reference_period"]').type("1");
    cy.get('label[for="sector_NAPNE"]').click();
    cy.get('label[for="3"]').click();
    cy.get('textarea[id="id_personal_history"]').type("Historico de teste");
    cy.get('textarea[id="id_specific_necessities"]').type(
      "Necessidades de teste"
    );
    cy.get('textarea[id="id_abilities"]').type("Habilidades de teste");
    cy.get('textarea[id="id_dificulties"]').type("Dificuldades de teste");
    cy.get("textarea[id=id_general_necessitie]").type(
      "Outras necessidades de teste"
    );
    cy.get('textarea[id="id_creation_reasons"]').type("Motivos de teste");
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

  it("Criar oferta", () => {
    cy.navigateToCreateOffer();
    cy.get('select[id="id_course"]').select(
      "Alimentos Técnico Integrado - Noturno"
    );
    cy.get('select[id="id_subject"]').select(
      "Fundamentos de Lógica e Algoritmos"
    );
    cy.get('label[for="72"]').click();
    cy.get('select[id="id_status"]').select("Aberta");
    cy.get('input[id="id_year"]').type("2025");
    cy.get('select[id="id_semester"]').select("2º Semestre");
    cy.get("button").contains("Salvar").click();
  });

  it("Adicionar discente a oferta", () => {
    cy.navigateToOffersList();
    cy.get("a[href='/academics/offers/detail/6/']").click();
    cy.get('input[id="studentSearch"]').type("Jacinto");
    cy.get("button").contains("Incluir").click();
    cy.get('input[name="search"]').type("Jacinto");
    cy.get("button").contains("Filtrar").click();
  });
});
