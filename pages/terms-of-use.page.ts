import { Page } from '@playwright/test';

export class TermsOfUsePage {
  constructor(private page: Page) {}

  async isTermsHeadingVisible() {
    return await this.page.locator('h3:has-text("Terms of Use")').isVisible();
  }

  async isAgreeButtonVisible() {
    return await this.page.locator('button:has-text("I agree to the terms of use")').isVisible();
  }

  async clickAgree() {
    await this.page.click('button:has-text("I agree to the terms of use")');
  }

  async isBackButtonVisible() {
    return await this.page.locator('a:has-text("Back")').isVisible();
  }

  async getCurrentURL() {
    return this.page.url();
  }
}