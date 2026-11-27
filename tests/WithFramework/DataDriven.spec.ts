import{test , expect} from '@playwright/test';

import logindata from "../WithFramework/Logindata.json"

    for(const data of logindata )
        {

test(`Verify Login on Soucedemo application ${data.username} , ${data.password} ` , async ({page}) =>{
    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill(data.username);
    await page.getByPlaceholder('Password').fill(data.password);
    await page.waitForTimeout(3000);
    await page.locator ('#login-button').click();
    await page.waitForTimeout(3000);


    //await expect (await page.getByText('Products')).toBeVisible();

});
    }