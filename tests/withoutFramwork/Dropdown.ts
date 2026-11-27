import { Browser, BrowserContext, chromium, Page } from "@playwright/test";


async function Dropdown() 
{
    let browser : Browser= await chromium.launch({headless:false})
    let context :BrowserContext =await browser.newContext();
    let page:Page = await context.newPage();
    await page.goto('https://www.letskodeit.com/practice');


    //Single select
    // const options = await page.locator('#carselect').allTextContents();
    // console.log(options);
    
    // await page.locator('#carselect').selectOption('BMW');
    //  await page.waitForTimeout(2000);
    // await page.locator('#carselect').selectOption({index:1});
    // await page.waitForTimeout(2000);
    // await page.locator('#carselect').selectOption({label:'Honda'});

    // Multiselect
await page.waitForTimeout(2000);
await page.locator('#multiple-select-example').selectOption (['apple','orange','peach']);
}
Dropdown();