import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://student.michaelkentburns.com/');
  await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'User' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('emsautoservices5@gmail.com');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('|*Gui_llain@97');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.pause();
});
test.only('create-account', async ({ page }) => {
  await page.goto('https://student.michaelkentburns.com/wp-login.php?action=register');
  await page.getByRole('textbox', { name: 'Username' }).fill('EMS AUTO');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email' }).fill('emsautoservices5@gmail.com');
  await page.getByRole('button', { name: 'Register' }).click();
});

test.only('reset-password-to-login', async ({ page }) => {
  await page.goto('https://student.michaelkentburns.com/wp-login.php?action=rp');
  await page.getByRole('textbox', { name: 'New password', exact: true }).fill('|*Gui_llain@97');
  await page.getByRole('button', { name: 'Save Password' }).click();
});

test.only('login', async ({ page }) => {
  await page.goto('https://student.michaelkentburns.com/');
  await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'User' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('emsautoservices5@gmail.com');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('|*Gui_llain@97');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'My Completed Surveys' }).click();
  await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'All Surveys' }).click();
});

test.only('logout', async ({ page }) => {
  await page.goto('https://student.michaelkentburns.com/');
  await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();
  await page.getByRole('link', { name: 'Student' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});