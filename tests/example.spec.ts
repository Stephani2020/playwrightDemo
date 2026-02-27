import { test, expect } from "@playwright/test";
import { LoginPage } from "./page-object/loginPage";
//import { InventoryPage } from "./page-object/inventoryPage";

test("login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  const authentication = new LoginPage(page);

  await authentication.enterUserName();

  await authentication.enterPassword();

  await authentication.clickLoginButton();
});

test("Login incorrecto", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  const authentication = new LoginPage(page);

  await authentication.Contrasenaincorrecta(
    "usuario_invalido",
    "password_invalido",
  );
});
