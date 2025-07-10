import { expect, Locator, Page } from "@playwright/test";

export class InventoryPage {
  private readonly shoppingCartButton: Locator;

  constructor(page: Page) {
    this.shoppingCartButton = page.locator("svg[data-icon='shopping-cart']");
  }

  async validateShoppingCart() {
    await expect(this.shoppingCartButton).toBeVisible();
  }
}
