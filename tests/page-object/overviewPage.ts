import { expect, Locator, Page } from "@playwright/test";

export class OverviewPage {
  private readonly finish: Locator;

  constructor(page: Page) {
    this.finish = page.locator("//a[@class='btn_action cart_button']");
  }

  async shipping() {
    await expect(this.finish).toBeVisible();
    await this.finish.click();
  }
}
