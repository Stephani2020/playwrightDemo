import { expect, Locator, Page } from "@playwright/test";

export class InventoryPage {
  private readonly shoppingCartButton: Locator;
  private readonly addToCart: Locator;
  private readonly addToCartSecondary: Locator;
  private readonly cartItem: Locator;

  constructor(page: Page) {
    this.shoppingCartButton = page.locator("svg[data-icon='shopping-cart']");
    this.addToCart = page.locator(
      "//a[@id='item_4_title_link']/ancestor::div[contains(@class, 'inventory_item')]//button[@class='btn_primary btn_inventory']"
    );
    this.addToCartSecondary = page.locator(
      "//a[@id='item_0_title_link']/ancestor::div[contains(@class, 'inventory_item')]//button[@class='btn_primary btn_inventory']"
    );
    this.cartItem = page.locator("//div[@class='subheader']");
  }

  async validateShoppingCart() {
    await expect(this.shoppingCartButton).toBeVisible();
  }

  async addProductsToCart() {
    await expect(this.addToCart).toBeVisible();
    await this.addToCart.click();
    await expect(this.addToCartSecondary).toBeVisible();
    await expect(this.addToCartSecondary).toBeDefined();
    await this.addToCartSecondary.click();
  }

  async clickShoppingCart() {
    await this.shoppingCartButton.click();
    await expect(this.cartItem).toBeVisible();
    await expect(this.cartItem).toHaveText("Your Cart");
  }
}
