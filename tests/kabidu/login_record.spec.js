import { test, expect } from '@playwright/test';

test('login_recod', async ({ page }) => {
  await page.goto('https://student.michaelkentburns.com/');
  await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'User' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('kabidu');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Toujours#toucher');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.pause();
});
test.only('create_account', async ({ page }) => {
  await page.goto('https://student.michaelkentburns.com/wp-login.php?action=register');
  await page.getByRole('textbox', { name: 'Username' }).fill('kasageabidu');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email' }).fill('kasageabidu@gmail.com');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('sokima');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email' }).fill('sokisokima@gmail.com');
  await page.getByRole('button', { name: 'Register' }).click();
});

test.only('reset_password_to_login', async ({ page }) => {
  await page.goto('https://student.michaelkentburns.com/wp-login.php?action=rp');
  await page.getByRole('textbox', { name: 'New password', exact: true }).fill('Toujours#toucher*28');
  await page.getByRole('button', { name: 'Save Password' }).click();
});

test.only('login', async ({ page }) => {
  await page.goto('https://student.michaelkentburns.com/');
  await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'User' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('soki');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('sokisokima@gmail.com');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Toujours#toucher*28');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'My Completed Surveys' }).click();
  await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'All Surveys' }).click();
});