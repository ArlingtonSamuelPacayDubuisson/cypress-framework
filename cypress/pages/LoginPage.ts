export class LoginPage {
  private readonly username = '[data-test="username"]';
  private readonly password = '[data-test="password"]';
  private readonly loginBtn = '[data-test="login-button"]';
  private readonly error = '[data-test="error"]';

  visit(): this {
    cy.visit("/");
    return this;
  }

  login(user: string, pass: string): this {
    cy.get(this.username).clear().type(user);
    cy.get(this.password).clear().type(pass, { log: false });
    cy.get(this.loginBtn).click();
    return this;
  }

  assertErrorContains(text: string): this {
    cy.get(this.error).should("be.visible").and("contain.text", text);
    return this;
  }
}

export const loginPage = new LoginPage();
