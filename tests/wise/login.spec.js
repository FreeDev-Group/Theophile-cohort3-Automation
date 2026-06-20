const test = require('node:test');
const { chromium } = require('playwright');

test('Register Test',  async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://student.michaelkentburns.com/');
  await page.getByRole('link', { name: 'User' }).click();
  await page.getByRole('link', { name: 'Register as Student' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('emsautoservices5@gmail.com');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email' }).fill('|*Gui_llain@97');
  await page.getByRole('button', { name: 'Register' }).click();
});

test('Login Test', async ({page}) => {
 await page.goto('https://student.michaelkentburns.com/wp-login.php');
  // await expect(page.getByRole('button', { name: 'Show password' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Username or Email Address' }).click();
    await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('emsautoservices5@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('|*Gui_llain@97');
  await page.getByText('Log In Powered by WordPress').click();
  await page.getByRole('checkbox', { name: 'Remember Me' }).check();
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://student.michaelkentburns.com/');
  // await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('banner').click();
  await page.getByRole('link', { name: 'Home' }).click();
  // await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'About' }).click();
  // await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'All Surveys' }).click();
  await page.goto('https://student.michaelkentburns.com/about/');
  // await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'My Completed Surveys' }).click();
  // await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'Student' }).click();
  await page.getByRole('link', { name: 'Profile' }).click();
  // await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'Student' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();