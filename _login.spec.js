const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://student.michaelkentburns.com/wp-login.php?action=register');
  // await expect(page.getByRole('heading', { name: 'Registration Form' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('kasage');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email' }).fill('kasageabidu@gmail.com');
  await page.getByRole('button', { name: 'Register' }).click();
  // await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();

  await page.locator('#login_error').getByRole('link', { name: 'Log in' }).click();
  // await expect(page.getByRole('button', { name: 'Show password' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Username or Email Address' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('kasage');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Toujours#toucher*');
  await page.getByRole('button', { name: 'Show password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByText('Remember Me').click();
  await page.getByRole('button', { name: 'Log In' }).click();
  // await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'Home' }).click();
  // await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'About' }).click();
  // await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'Student' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();