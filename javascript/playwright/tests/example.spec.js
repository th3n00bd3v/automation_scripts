// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://awesomeqa.com/ui/');

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/opencart/);
});

// test('registration', async ({ page }) => {
//   await page.goto('https://awesomeqa.com/ui/');

//   // Go to registration page.
//   await page.getByRole('title', { name: 'My Account'}).click();
//   await page.getByRole('link', { name: 'Register' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Register Account' })).toBeVisible();
// });
