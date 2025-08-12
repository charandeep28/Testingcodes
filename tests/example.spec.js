// @ts-check
import { test, expect,chromium } from '@playwright/test';

test("Facebook has   title", async ({ page }) => {
  await page.goto('https://facebook.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Facebook/);
});
test(" YouTube has title", async ({ page }) => {
  await page.goto('https://youtube.com/');
  // Click on the search bar 

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/YouTube/);
});
test("Playwright has  title", async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Expect a title "to contain" a substring.

  await expect(page).toHaveTitle(/Playwright/);
});

