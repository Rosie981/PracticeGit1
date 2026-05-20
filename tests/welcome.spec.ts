import { test, expect } from '@playwright/test';
import { WelcomePage } from '../pages/welcome.page';
import { TermsOfUsePage } from '../pages/terms-of-use.page';

test('Welcome page test', async ({ page }) => {
  const welcomePage = new WelcomePage(page);

  // Navigate to the appointment page
  console.log('Navigating to the welcome page...');

  await welcomePage.goto();

  // Check that the welcome heading is visible
  expect(await welcomePage.isWelcomeHeadingVisible()).toBe(true);

  // Check the description text
  expect(await welcomePage.isDescriptionVisible()).toBe(true);

  // Click the Start button
  await welcomePage.clickStart();

  // Verify navigation to the terms of use page
  expect(await welcomePage.getCurrentURL()).toContain('terms-of-use');

  // Now test the Terms of Use page
  const termsPage = new TermsOfUsePage(page);

  // Check that the terms heading is visible
  expect(await termsPage.isTermsHeadingVisible()).toBe(true);

  // Check that the agree button is visible
  expect(await termsPage.isAgreeButtonVisible()).toBe(true);

  // Check that the back button is visible
  expect(await termsPage.isBackButtonVisible()).toBe(true);
});