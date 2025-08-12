import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('instgara');
  await page.locator('div').filter({ hasText: /^instagram$/ }).first().click();
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.goto('https://www.youtube.com/');
  await page.getByRole('link', { name: 'YouTube Home' }).click();
  await page.getByRole('link', { name: 'YouTube Home' }).click();
  await page.getByRole('link', { name: 'Sign in' }).click();
});