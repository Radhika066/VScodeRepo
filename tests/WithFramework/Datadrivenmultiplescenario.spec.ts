import{test , expect} from '@playwright/test';

import loginmul from "../WithFramework/LoginTestData.json"

    

test(`Verify Login on Soucedemo application ${loginmul.InValidlogin.username} , ${loginmul.InValidlogin.password} ` , async ({page}) =>{
    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill(loginmul.InValidlogin.username);
    await page.getByPlaceholder('Password').fill(loginmul.InValidlogin.password);
    await page.waitForTimeout(3000);
    await page.locator ('#login-button').click();
    await page.waitForTimeout(3000);


    //await expect (await page.getByText('Products')).toBeVisible();

});

test(`Verify Login on Soucedemo application ${loginmul.Validlogin.username} , ${loginmul.Validlogin.password} ` , async ({page}) =>{
    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill(loginmul.Validlogin.username);
    await page.getByPlaceholder('Password').fill(loginmul.Validlogin.password);
    await page.waitForTimeout(3000);
    await page.locator ('#login-button').click();
    await page.waitForTimeout(3000);


    //await expect (await page.getByText('Products')).toBeVisible();

});
    