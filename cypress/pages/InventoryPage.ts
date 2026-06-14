export class InventoryPage {
  private readonly container = '[data-test="inventory-container"]';
  private readonly items = '[data-test="inventory-item"]';
  private readonly cartBadge = '[data-test="shopping-cart-badge"]';
  private readonly sortSelect = '[data-test="product-sort-container"]';

  assertLoaded(): this {
    cy.url().should("include", "/inventory.html");
    cy.get(this.container).should("be.visible");
    return this;
  }

  itemCount(): Cypress.Chainable<number> {
    return cy.get(this.items).its("length");
  }

  addFirstItemToCart(): this {
    cy.get(this.items).first().find("button").click();
    return this;
  }

  assertCartCount(n: number): this {
    cy.get(this.cartBadge).should("have.text", String(n));
    return this;
  }

  sortBy(value: "az" | "za" | "lohi" | "hilo"): this {
    cy.get(this.sortSelect).select(value);
    return this;
  }
}

export const inventoryPage = new InventoryPage();
