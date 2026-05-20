import { test, expect } from '@playwright/test';
import { TermsOfUsePage } from '../pages/terms-of-use.page';

test('Terms of Use page test', async ({ page }) => {
  const termsPage = new TermsOfUsePage(page);

  // Navigate to the terms of use page (assuming direct access or from welcome)
  await page.goto('https://myeapsupport.com/appointment/terms-of-use');

  // Check that the terms heading is visible
  expect(await termsPage.isTermsHeadingVisible()).toBe(true);

  // Check that the agree button is visible
  expect(await termsPage.isAgreeButtonVisible()).toBe(true);

  // Check that the back button is visible
  expect(await termsPage.isBackButtonVisible()).toBe(true);

  // Click agree and check navigation to the next step
  await termsPage.clickAgree();
  expect(await termsPage.getCurrentURL()).toContain('organization');
});