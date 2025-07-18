import { test, expect } from "@playwright/test";
import { LoginPage } from "./page-object/loginPage";
import { InventoryPage } from "./page-object/inventoryPage";
import { CartPage } from "./page-object/cartPage";
import { YourInformationPage } from "./page-object/yourInformationPage";
import { OverviewPage } from "./page-object/overviewPage";
import { ScreenshotHelper } from "./web-utils/screenshotsHelper";

test("add product to cart", async ({ page }, testInfo) => {
  await page.goto("https://www.saucedemo.com/v1/index.html");

  const authentication = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const record = new YourInformationPage(page);
  const checkout = new YourInformationPage(page);
  const overviewPage = new OverviewPage(page);

  await authentication.enterUserName();

  await authentication.enterPassword();

  await authentication.clickLoginButton();
  await ScreenshotHelper.attachScreenshot(page, testInfo, "pantalla-inicio");

  await inventoryPage.validateShoppingCart();
  await inventoryPage.addProductsToCart();
  await inventoryPage.clickShoppingCart();
  await cartPage.valideteSubHeader();
  await cartPage.clickCheckoutButton();
  await record.enterFirstName();
  await record.enterLastName();
  await record.enterPostalCode();
  await checkout.clickContinueButton();
  await overviewPage.shipping();
});
