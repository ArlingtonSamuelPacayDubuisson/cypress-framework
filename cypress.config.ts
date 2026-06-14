import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/**/*.cy.ts",
    supportFile: "cypress/support/e2e.ts",
    fixturesFolder: "cypress/fixtures",
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 8000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    env: {
      apiUrl: "https://jsonplaceholder.typicode.com",
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
