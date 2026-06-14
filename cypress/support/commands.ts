/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Inicia sesión vía UI en SauceDemo.
       * @example cy.login('standard_user', 'secret_sauce')
       */
      login(username: string, password: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add("login", (username: string, password: string) => {
  cy.visit("/");
  cy.get('[data-test="username"]').clear().type(username);
  cy.get('[data-test="password"]').clear().type(password, { log: false });
  cy.get('[data-test="login-button"]').click();
});

export {};
