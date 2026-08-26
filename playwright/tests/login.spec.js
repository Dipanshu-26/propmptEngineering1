const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { loginTestData } = require('../test-data/login-test-data');

test('TC-001 - Valid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const credentials = loginTestData.validUser;

  await loginPage.navigateToLoginPage();
  await loginPage.login(credentials.username, credentials.password);

  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('h6')).toHaveText('Dashboard');
});

test('TC-002 - Invalid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const credentials = loginTestData.invalidUsername;

  await loginPage.navigateToLoginPage();
  await loginPage.login(credentials.username, credentials.password);

  await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials');
});

test('TC-003 - Logout After Successful Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const credentials = loginTestData.validUser;

  await loginPage.navigateToLoginPage();
  await loginPage.login(credentials.username, credentials.password);
  await loginPage.logout();

  await expect(page).toHaveURL(/auth\/login/);
  await expect(page.locator('input[name="username"]')).toBeVisible();
});
