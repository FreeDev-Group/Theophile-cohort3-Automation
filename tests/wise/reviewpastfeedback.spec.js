import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'Show password' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Username or Email Address' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('emsautoservices5@gmail.com');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('|*Gui_llain@97');
  await page.getByRole('checkbox', { name: 'Remember Me' }).check();
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'My Completed Surveys' }).click();
  await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('link', { name: 'Wise _Test_With_Playwright' }).click();
  await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByText('Your Answers for: Wise _Test_With_Playwright UpdatedHave you enjoyed this test').click();
  await page.getByText('Instructor Feedback: Thank').click();
  await expect(page.getByRole('link', { name: 'Profile' })).toBeVisible();

  await page.getByRole('link', { name: 'Student' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  await page.close();
});
