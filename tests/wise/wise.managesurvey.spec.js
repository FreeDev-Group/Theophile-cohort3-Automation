import { test, expect } from '@playwright/test';

test('wisesurvey', async ({ page }) => {
  await page.goto('https://student.michaelkentburns.com/');
  await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'User' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('guillainwise@gmail.com');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('|*Gui_llain@97');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await expect(page.getByRole('button', { name: 'Show password' })).toBeVisible();

  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://student.michaelkentburns.com/wp-admin/');
  await expect(page.getByRole('region', { name: 'Activity' })).toBeVisible();

  await page.getByRole('link', { name: 'Surveys', exact: true }).click();
});