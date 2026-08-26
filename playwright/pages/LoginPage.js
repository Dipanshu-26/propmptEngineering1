class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

    this.locators = {
      username: 'input[name="username"]',
      password: 'input[name="password"]',
      loginButton: 'button[type="submit"]',
      userMenu: '.oxd-userdropdown-tab',
      logoutLink: 'a[href="/web/index.php/auth/logout"]'
    };
  }

  async navigateToLoginPage() {
    await this.page.goto(this.loginUrl, { waitUntil: 'domcontentloaded' });
    await this.page.locator(this.locators.username).waitFor({ state: 'visible' });
  }

  async enterUsername(username) {
    await this.page.locator(this.locators.username).fill(username);
  }

  async enterPassword(password) {
    await this.page.locator(this.locators.password).fill(password);
  }

  async clickLogin() {
    await this.page.locator(this.locators.loginButton).click();
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async logout() {
    await this.page.locator(this.locators.userMenu).click();
    await this.page.locator(this.locators.logoutLink).click();
  }
}

module.exports = { LoginPage };
