import { Page, TestInfo } from "@playwright/test";

export class ScreenshotHelper {
  static async attachScreenshot(page: Page, testInfo: TestInfo, name: string) {
    await testInfo.attach(name, {
      body: await page.screenshot(),
      contentType: "image/png",
    });
  }
}
export async function takeScreenshot(
  page: Page,
  testInfo: TestInfo,
  name: string
) {
  await ScreenshotHelper.attachScreenshot(page, testInfo, name);
}
