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
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('abidusagemg');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Toujours#toucher**');
  await page.getByRole('button', { name: 'Show password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Password' }).fill('Toujours#toucher*');
  await page.getByRole('button', { name: 'Log In' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();