import { test, expect } from '@playwright/test';

test('loginwise', async ({ page }) => {
  await page.goto('https://student.michaelkentburns.com/login')
  await page.getByRole('textbox', { name: 'Username or Email Address' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('emsautoservices5@gmail.com');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('|*Gui_llain@97');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.pause();
})

test('logoutwise', async ({ page }) => {
  await page.goto('https://student.michaelkentburns.com/login')
  await page.getByRole('textbox', { name: 'Username or Email Address' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('emsautoservices5@gmail.com');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('|*Gui_llain@97');
  await page.getByRole('button', { name: 'Log In' }).click();

  await page.getByRole('link', { name: 'Student' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  await page.pause();
})