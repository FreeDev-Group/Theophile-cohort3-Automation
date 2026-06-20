const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://student.michaelkentburns.com/');
  // await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'Home' }).click();
  // await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('button', { name: 'Accept All' }).click();
  // await expect(page.getByRole('button', { name: 'Consent Preferences' })).toBeVisible();

  await page.getByRole('link', { name: 'User' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('sage kabidumg');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Je ne suispas n\'importe qui');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();