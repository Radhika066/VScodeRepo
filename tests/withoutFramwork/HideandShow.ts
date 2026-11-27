// import { Browser, BrowserContext, chromium, Page } from "@playwright/test";


// async function HideandShow() 
// {
//     let browser : Browser= await chromium.launch({headless:false})
//     let context :BrowserContext =await browser.newContext();
//     let page:Page = await context.newPage();
//     await page.goto('https://www.letskodeit.com/practice');

//     let hideBtn = await page.locator('#hide-textbox');
//     let showBtn = await page.locator('#show-textbox');
//     let textbox =await page.locator ('#displayed-text');

//     console.log(await textbox.isHidden());
//     await hideBtn.click();
//     console.log (await textbox.isVisible());
//     await showBtn.click();
//     console.log (await textbox.isHidden());
// }

// HideandShow();

