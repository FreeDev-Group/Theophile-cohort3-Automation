import { test, expect } from "@playwright/test";

test.only("kabidumanagesurvey", async ({ page }) => {
  await page.goto("https://student.michaelkentburns.com/");
  await expect(
    page.getByRole("region", { name: "We value your privacy" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "User" }).click();
  await page.getByRole("link", { name: "Login" }).click();
  await page
    .getByRole("textbox", { name: "Username or Email Address" })
    .fill("sage kabidu");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page
    .getByRole("textbox", { name: "Password" })
    .fill("Toujours#toucher*28");
  await page.getByRole("button", { name: "Log In" }).click();
  await expect(page.getByRole("link", { name: "Dashboard" })).toBeVisible();
  await page.getByRole("link", { name: "Surveys", exact: true }).click();
  await expect(
    page.getByRole("table", { name: "Table ordered by Date." }),
  ).toBeVisible();
  await page
    .locator("#wpbody-content")
    .getByRole("link", { name: "Add New Survey" })
    .click();
  await page
    .getByRole("textbox", { name: "Add title" })
    .fill("testing manager survey by sage");
  await page.locator("#content").click();
  await page.locator("#content").fill("i am testing the survey");
  await page.getByRole("textbox", { name: "Description" }).click();
  await page
    .getByRole("textbox", { name: "Description" })
    .fill("description zone");
  await page.getByRole("textbox", { name: "Start Date" }).fill("2026-08-09");
  await page.getByRole("textbox", { name: "End Date" }).fill("2026-08-22");
  await page.getByRole("button", { name: "Publish", exact: true }).click();
  await expect(page.getByRole("link", { name: "Dashboard" })).toBeVisible();
  await page.getByRole("link", { name: "Surveys", exact: true }).click();
  await expect(
    page.getByRole("table", { name: "Table ordered by Date." }),
  ).toBeVisible();
  await page
    .getByRole("link", { name: "testing manager survey by sage", exact: true })
    .click();
  await expect(page.getByRole("link", { name: "Dashboard" })).toBeVisible();
  await page.getByRole("button", { name: "Edit permalink" }).click();
  await page
    .getByRole("textbox", { name: "URL Slug" })
    .fill("testing-manager-survey-by-sage_edit");
  await page.getByText("i am testing the survey").click();
  await page
    .getByText("i am testing the survey")
    .fill("i am testing the survey_edit");
  await page.getByRole("textbox", { name: "Description" }).click();
  await page
    .getByRole("textbox", { name: "Description" })
    .fill("description zone_edit");
  await page.getByRole("textbox", { name: "Start Date" }).fill("2026-08-27");
  await page.getByRole("textbox", { name: "End Date" }).fill("2026-09-05");
  await page.getByRole("button", { name: "OK" }).click();
  await expect(
    page.getByRole("button", { name: "Edit permalink" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Update" }).click();
  await expect(page.getByRole("link", { name: "Dashboard" })).toBeVisible();
  await page.getByRole("link", { name: "Surveys", exact: true }).click();
  await expect(
    page.getByRole("table", { name: "Table ordered by Date." }),
  ).toBeVisible();
  await page.getByRole('link', { name: 'testing manager survey by sage', exact: true }).click();
  await expect(page.getByRole("link", { name: "Dashboard" })).toBeVisible();
  await page.getByRole("textbox", { name: "Add title" }).click();
  await page
    .getByRole("textbox", { name: "Add title" })
    .fill("testing manager survey by sage_edit");
  await page.getByRole("button", { name: "Update" }).click();
  await expect(page.getByRole("link", { name: "Dashboard" })).toBeVisible();
  await page.getByRole("link", { name: "Surveys", exact: true }).click();
  await expect(
    page.getByRole("table", { name: "Table ordered by Date." }),
  ).toBeVisible();
  await page
    .getByRole("link", { name: "Move “testing manager survey" })
    .click();
  await expect(
    page.getByRole("table", { name: "Table ordered by Date." }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Surveys", exact: true }).click();
  await expect(
    page.getByRole("table", { name: "Table ordered by Date." }),
  ).toBeVisible();
  await page.getByRole("menuitem", { name: "Log Out" }).click();
  await page.close();
});
