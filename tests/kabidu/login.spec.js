const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://student.michaelkentburns.com/wp-login.php?action=register');
  // await expect(page.getByRole('heading', { name: 'Registration Form' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('kasage');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('kasageabidu@gmail.com');
  await page.getByRole('button', { name: 'Register' }).click();
  // await expect(page.getByRole('heading', { name: 'Check your email' })).toBeVisible();

  await page.getByRole('link', { name: 'login page' }).click();
  const page1 = await context.newPage();
  await page1.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dmail%26oq%3Dmail%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDIwODBqMGo3qAIAsAIA%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3D7eM2atOaEdumkdUPpKqq4QQ&q=EgSZQ4tAGO3H29EGIjAMzCT4DraQJ8DjP7KNjlHoZtIFI_9JN8Pq9aIskLV3j2KL9IagSRG1yJli-V0hXKwyAVJaAUM');
  await page1.locator('iframe[name="a-z0yx9nyh9te8"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  // await expect(page1.locator('iframe[name="c-z0yx9nyh9te8"]').contentFrame().getByRole('button', { name: 'Get a new challenge' })).toBeVisible();

  await page1.locator('iframe[name="c-z0yx9nyh9te8"]').contentFrame().locator('[id="9"]').click();
  // await expect(page1.locator('iframe[name="c-z0yx9nyh9te8"]').contentFrame().getByRole('button', { name: 'Verify' })).toBeVisible();

  await page1.locator('iframe[name="c-z0yx9nyh9te8"]').contentFrame().locator('[id="10"]').click();
  await page1.locator('iframe[name="c-z0yx9nyh9te8"]').contentFrame().locator('[id="6"]').click();
  await page1.locator('iframe[name="c-z0yx9nyh9te8"]').contentFrame().locator('[id="5"]').click();
  await page1.locator('iframe[name="c-z0yx9nyh9te8"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  // await expect(page1.getByRole('link', { name: 'Coupe du Monde 2026 : l\'art' })).toBeVisible();

  await page1.getByRole('link', { name: 'Se connecter à Gmail -' }).click();
  // await expect(page1.getByRole('navigation', { name: 'Se connecter ou se déconnecter' })).toBeVisible();

  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('article').getByRole('link', { name: 'Se connecter à Gmail' }).click();
  const page2 = await page2Promise;
  await page1.goto('https://www.google.com/search?q=mail&oq=mail&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDIwODBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&sei=7eM2atOaEdumkdUPpKqq4QQ');
  // await expect(page1.getByRole('link', { name: 'Coupe du Monde 2026 : l\'art' })).toBeVisible();

  await page1.getByRole('link', { name: 'Gmail Google Accounts https' }).click();
  await page1.getByRole('textbox', { name: 'Adresse e-mail ou téléphone' }).fill('kasageabidu@gmail.com');
  await page1.getByRole('textbox', { name: 'Adresse e-mail ou téléphone' }).press('Enter');
  // await expect(page.getByRole('button', { name: 'Show password' })).toBeVisible();


  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('kasage');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Toujours#toucher*');
  await page.getByRole('button', { name: 'Show password' }).click();
  // await expect(page.getByRole('button', { name: 'Hide password' })).toBeVisible();

  await page.getByText('Remember Me').click();
  await page.getByRole('button', { name: 'Log In' }).click();
  // await expect(page.getByRole('region', { name: 'We value your privacy' })).toBeVisible();

  await page.getByRole('button', { name: 'Accept All' }).click();
  // await expect(page.getByRole('button', { name: 'Consent Preferences' })).toBeVisible();

  await page.getByRole('link', { name: 'Home' }).click();
  // await expect(page.getByRole('button', { name: 'Consent Preferences' })).toBeVisible();

  await page.getByRole('link', { name: 'All Surveys' }).click();
  // await expect(page.getByRole('button', { name: 'Consent Preferences' })).toBeVisible();

  await page.getByRole('link', { name: 'Student' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();