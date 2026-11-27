import{test , expect} from '@playwright/test';

const logindata=[
    {
      username:"standard_user",
      password:"secret_sauce"
    },
     {
      username:"standard_user",
      password:"Text"
    },
     {
      username:"Text",
      password:"secret_sauce"
    },
     {
      username:"Text",
      password:"Text"
    },
     {
      username:"",
      password:""
    },]

    for(const data of logindata ){

    

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