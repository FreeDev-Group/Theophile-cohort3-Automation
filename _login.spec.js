const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://student.michaelkentburns.com/');
  await page.getByRole('link', { name: 'User' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('kabidusage');
  await page.getByRole('textbox', { name: 'Password' }).click();
  const page1 = await context.newPage();
  await page1.close();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();