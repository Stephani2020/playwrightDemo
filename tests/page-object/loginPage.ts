import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private readonly userNameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly shoppingCartButton: Locator;

  constructor(page: Page) {
    this.userNameInput = page.locator("//input[@id='user-name']");
    this.passwordInput = page.locator("//input[@id='password']");
    this.loginButton = page.locator("input[id='login-button']");
    this.shoppingCartButton = page.locator("svg[data-icon='shopping-cart']");
  }

  async enterUserName() {
    await this.userNameInput.fill("standard_user");
  }

  async enterPassword() {
    await this.passwordInput.fill("secret_sauce");
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }
}
