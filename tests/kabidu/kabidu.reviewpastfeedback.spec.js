import { test, expect } from '@playwright/test';

test('kabidureviewpastfeedback', async ({ page }) => {
    await page.goto('https://student.michaelkentburns.com/wp-login.php')

    await page.getByRole('textbox', { name: 'Username or Email Address' }).click();
    await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('kabidusage7@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Toujours#toucher*28');
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

    await page.getByRole('link', { name: 'My Completed Surveys' }).click();
    await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

    await page.getByRole('link', { name: 'testing_provide_feedback_by_kabidusae' }).click();
    await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

    await page.getByRole('heading', { name: 'Your Answers for:' }).click();
    await page.getByText('Instructor Feedback: tank you').click();

    await page.getByRole('link', { name: 'Student' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await page.close();
});