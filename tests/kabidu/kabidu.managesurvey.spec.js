import { test, expect } from '@playwright/test';

test('kabidu_manage_survey', async ({ page }) => {
  await page.goto('https://student.michaelkentburns.com/')

  await page.getByRole('link', { name: 'User' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('sage kabidu');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Toujours#toucher*28');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://student.michaelkentburns.com/wp-admin/');
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Surveys', exact: true }).click();
  await expect(page.getByRole('table', { name: 'Table ordered by Date.' })).toBeVisible();
  await page.locator('#wpbody-content').getByRole('link', { name: 'Add New Survey' }).click();
  await page.getByRole('textbox', { name: 'Add title' }).fill('abidusage_manage_survey_by_intructor');
  await page.getByRole('button', { name: 'Publish', exact: true }).click();
  await page.goto('https://student.michaelkentburns.com/wp-admin/post.php?post=1514&action=edit');
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('button', { name: 'Edit permalink' }).click();
  await page.getByRole('textbox', { name: 'URL Slug' }).click();
  await page.getByRole('textbox', { name: 'URL Slug' }).fill('abidusage_manage_survey_by_intructor_edit');
  await page.getByRole('button', { name: 'OK' }).click();
  await expect(page.getByRole('button', { name: 'Edit permalink' })).toBeVisible();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.goto('https://student.michaelkentburns.com/wp-admin/post.php?post=1514&action=edit');
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Move to Trash' }).click();
  await expect(page.getByRole('table', { name: 'Table ordered by Date.' })).toBeVisible();
  await page.getByRole('menuitem', { name: 'Log Out' }).click();
  await page.close();
});