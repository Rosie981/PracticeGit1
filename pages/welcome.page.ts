import { Page } from '@playwright/test';

export class WelcomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://myeapsupport.com/appointment');
  }

  async isWelcomeHeadingVisible() {
    return await this.page.locator('h2:has-text("Welcome!")').isVisible();
  }

  async isDescriptionVisible() {
    return await this.page.locator('text=Don\'t let your busy schedule stand in your way.').isVisible();
  }

  async clickStart() {
    await this.page.click('button:has-text("Start")');
  }

  async getCurrentURL() {
    return this.page.url();
  }
}