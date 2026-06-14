import { inventoryPage } from "../../pages/InventoryPage";

describe("Inventario de productos", () => {
  beforeEach(() => {
    cy.login("standard_user", "secret_sauce");
    inventoryPage.assertLoaded();
  });

  it("lista los 6 productos del catálogo", () => {
    inventoryPage.itemCount().should("eq", 6);
  });

  it("agrega un producto al carrito y actualiza el badge", () => {
    inventoryPage.addFirstItemToCart().assertCartCount(1);
  });

  it("ordena los productos de la Z a la A", () => {
    inventoryPage.sortBy("za");
    cy.get('[data-test="inventory-item-name"]')
      .first()
      .should("contain.text", "Test.allTheThings()");
  });
});
