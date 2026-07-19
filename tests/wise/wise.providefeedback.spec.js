import { test, expect } from '@playwright/test';


test('providefeedbackwise', async ({ page }) => {
  await page.goto('https://student.michaelkentburns.com/wp-login.php')
  await expect(page.getByRole('button', { name: 'Show password' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Username or Email Address' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('emsautoservices5@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('|*Gui_llain@97');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'All Surveys' }).click();
  await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'Wise _Test_With_Playwright Updated' }).click();
  await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Your answer...' }).click();
  await page.getByRole('textbox', { name: 'Your answer...' }).fill('Yes, it was an amazing experience');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'Student' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  await page.close();
})
