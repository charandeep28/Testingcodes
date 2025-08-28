import { test, expect } from "@playwright/test";

test("check youtube", async ({ page }) => {
  await page.goto("https://www.youtube.com/");
  
  // Check that the YouTube home link is visible
  await expect(page.getByRole("link", { name: "YouTube Home" })).toBeVisible();
  
  // Interact with search box
  const searchBox = page.getByRole("combobox", { name: "Search" });
  await searchBox.click();
  await searchBox.dblclick();
  await searchBox.fill("Playwright testing");
  await searchBox.press("Enter"); // fixed empty press

  // Click on Subscribe (redirects to Sign In page if not logged in)
  await page.getByRole("link", { name: "Subscribe", exact: true }).click();

  // Verify Sign in page elements
  const emailBox = page.getByRole("textbox", { name: "Email or phone" });
  await expect(emailBox).toHaveValue(""); // replaces toBeEmpty()
  await expect(page.locator("h1.headingText")).toContainText("Sign in");
  await expect(page.locator("section")).toContainText("Forgot email?");
  await expect(emailBox).toHaveValue(""); // double-check textbox empty
});
