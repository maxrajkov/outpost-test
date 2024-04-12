const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '62ccoz',
  e2e: {
    pageLoadTimeout: 6000,
    taskTimeout: 6000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "https://test.outpostchess.com",

  },
});
