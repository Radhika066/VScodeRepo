import { test, expect } from '@playwright/test';
import { ExcelReader } from './Excelreader';

const LoginData = ExcelReader.readexcel(

    './tests/WithFramework/TestData/LoginTestdatastore.xlsx','LoginData');
// //'C:/Users/Administrator/Desktop/RJ/Playwright/tests/WithFramework/TestData/LoginTestdatastore.xlsx' ,'LoginData');

// console.log(LoginData);
// test(`Verify Login on SouceDemo application ${LoginData.ValidLogin}`, async ({ page }) => {
// //test('Verify Login on SauceDemo application', async ({ page }) => {

//         await page.goto('https://www.saucedemo.com/');

//         await page.getByPlaceholder('Username').fill(LoginData[3].username);
//         await page.waitForTimeout(2000);
//         await page.getByPlaceholder('Password').fill(LoginData[3].password);
//         await page.waitForTimeout(2000);
//         await page.locator('#login-button').click();
//         await page.waitForTimeout(2000);
//         await expect(page.getByText('Products')).toBeVisible();
//     }
// );


for (let i = 0; i < LoginData.length; i++) {

    test(`Verify Login - Excel row ${i + 1}`, async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.waitForTimeout(2000);
        await page.getByPlaceholder('Username').fill(LoginData[i].username);
        await page.waitForTimeout(2000);
        await page.getByPlaceholder('Password').fill(LoginData[i].password);
        await page.waitForTimeout(2000);
        await page.locator('#login-button').click();
        await page.waitForTimeout(2000);
        await expect(page.getByText('Products')).toBeVisible();

    });
}

