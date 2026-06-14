import { loginPage } from "../../pages/LoginPage";
import { inventoryPage } from "../../pages/InventoryPage";

describe("Autenticación", () => {
  let users: { [k: string]: { username: string; password: string } };

  before(() => {
    cy.fixture("users").then((data) => (users = data));
  });

  beforeEach(() => {
    loginPage.visit();
  });

  it("permite el login con credenciales válidas", () => {
    loginPage.login(users.standard.username, users.standard.password);
    inventoryPage.assertLoaded();
  });

  it("rechaza un usuario bloqueado", () => {
    loginPage.login(users.locked.username, users.locked.password);
    loginPage.assertErrorContains("locked out");
  });

  it("muestra error con credenciales inválidas", () => {
    loginPage.login(users.invalid.username, users.invalid.password);
    loginPage.assertErrorContains("do not match");
  });

  it("exige usuario y contraseña", () => {
    loginPage.login(" ", " ");
    loginPage.assertErrorContains("Username and password do not match");
  });
});
