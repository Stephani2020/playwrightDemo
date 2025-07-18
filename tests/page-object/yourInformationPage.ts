import { expect, Locator, Page } from "@playwright/test";

export class YourInformationPage {
  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly postalCode: Locator;
  private readonly continueButton: Locator;

  constructor(page: Page) {
    this.firstName = page.locator("//input[@data-test='firstName']");
    this.lastName = page.locator("//input[@data-test='lastName']");
    this.postalCode = page.locator("//input[@data-test='postalCode']");
    this.continueButton = page.locator(
      "//input[@class='btn_primary cart_button']"
    );
  }

  async enterFirstName() {
    await expect(this.firstName).toBeVisible();
    await this.firstName.fill("Pedro");
  }

  async enterLastName() {
    await expect(this.lastName).toBeVisible();
    await this.lastName.fill("Sanchez");
  }

  async enterPostalCode() {
    await expect(this.postalCode).toBeVisible();
    await this.postalCode.fill("123456");
  }

  async clickContinueButton() {
    await expect(this.continueButton).toBeVisible();
    await this.continueButton.click();
  }
}
