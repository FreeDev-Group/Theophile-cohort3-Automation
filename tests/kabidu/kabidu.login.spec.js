import { test, expect } from '@playwright/test';

test.only('createaccountkabidu', async ({ page }) => {
  // 1. Générer des données uniques à chaque exécution
  const timestamp = new Date().getTime();
  const uniqueUsername = `kabidusage_${timestamp}`;
  const uniqueEmail = `kabidusage_${timestamp}@gmail.com`;

  await page.goto('https://student.michaelkentburns.com/wp-login.php?action=register')
  await page.getByLabel ('Username').fill('uniqueUsername');
  await page.getByLabel('Email').fill('uniqueEmail');
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