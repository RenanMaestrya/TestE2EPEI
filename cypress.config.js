const { defineConfig } = require("cypress");
const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://pei-hmg.nadic.ifrn.edu.br",
  },
  env: {
    EMAIL_TEACHER: process.env.EMAIL_TEACHER,
    EMAIL_COORDINATOR: process.env.EMAIL_COORDINATOR,
    PASSWORD: process.env.PASSWORD
  }
});
