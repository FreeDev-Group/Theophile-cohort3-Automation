import { test, expect } from '@playwright/test';

test('createaccountkabidu', async ({ page }) => {
  await page.goto('https://student.michaelkentburns.com/wp-login.php?action=register')
  await page.getByRole('link', { name: 'User' }).click();
  await page.getByRole('link', { name: 'Register as Student' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('kabidusage');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email' }).fill('kabidusage7@gmail.com');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.close();
})

test('loginkabidu', async ({ page }) => {
  await page.goto('https://student.michaelkentburns.com/wp-login.php')
  await page.getByRole('textbox', { name: 'Username or Email Address' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('kabidusage');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Toujours#toucher*28');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.close();
})

test('logoutkabidu', async ({ page }) => {
  await page.goto('https://student.michaelkentburns.com/wp-login.php')
  await page.getByRole('textbox', { name: 'Username or Email Address' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('kabidusage');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Toujours#toucher*28');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'Student' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  await page.close();
})