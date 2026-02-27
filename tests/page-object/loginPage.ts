import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private readonly userNameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.userNameInput = page.locator("//input[@id='user-name']");
    this.passwordInput = page.locator("//input[@id='password']");
    this.loginButton = page.locator("input[id='login-button']");
  }

  async enterUserName() {
    await this.userNameInput.fill(process.env.USERNAME || "");
  }

  async enterPassword() {
    await this.passwordInput.fill(process.env.PASSWORD || "");
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async Contrasenaincorrecta(username: string, password: string) {
    await this.userNameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
