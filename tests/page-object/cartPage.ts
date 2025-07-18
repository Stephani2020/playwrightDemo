import { expect, Locator, Page } from "@playwright/test";

export class CartPage {
  private readonly cartItem: Locator;
  private readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.cartItem = page.locator("//div[@class='subheader']");
    this.checkoutButton = page.locator(
      "//a[@class='btn_action checkout_button']"
    );
  }

  async valideteSubHeader() {
    await expect(this.cartItem).toBeVisible();
  }
  async clickCheckoutButton() {
    await expect(this.checkoutButton).toBeVisible();
    await this.checkoutButton.click();
  }
}
