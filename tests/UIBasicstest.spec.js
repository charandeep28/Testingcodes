const { test } = require('@playwright/test');


test('Browser Context Playwright test', async ({browser}) =>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.facebook.com/");
});

test('Page Context Playwright test', async ({page}) =>{

    await page.goto("https://www.instagram.com/");
});