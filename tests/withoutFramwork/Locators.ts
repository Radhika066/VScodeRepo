// import { Browser, BrowserContext, chromium, Page } from "@playwright/test";


// async function Locators():Promise<void>
//  {
//     let browser:Browser=await chromium.launch({headless:false});
//     let context:BrowserContext= await browser.newContext();
//     let page:Page= await context.newPage();
//     await page.goto ('https://www.letskodeit.com/practice');

//     const enableBtn=await page.locator('#enabled-button');
//     const disableBtn=await page.locator('#disabled-button');
//     const textbox = await page.locator('#enabled-example-input');

//     console.log (await textbox.isEnabled());
//     await disableBtn.click();
//     console.log (await textbox.isDisabled());
//     await enableBtn.click();
//     console.log(await textbox.isDisabled());
// }
// Locators();
