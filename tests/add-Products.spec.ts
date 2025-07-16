import { test, expect } from "@playwright/test";
import { LoginPage } from "./page-object/loginPage";
import { InventoryPage } from "./page-object/inventoryPage";

test("login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/v1/inventory.html");
  const authentication = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  await authentication.clickLoginButton();
  await inventoryPage.validateShoppingCart();
  await page.getByRole("button", { name: "Add to cart" }).first().click();
  const loginButton = page.locator("input[id='login-button']");
});
