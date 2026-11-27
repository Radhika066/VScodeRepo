


//browser

import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function OpenBrowser ():Promise<void>
 {
   let browser:Browser = await chromium.launch({headless:false});
let context:BrowserContext=await browser.newContext();
let page:Page = await context.newPage();

await page.goto('https://www.letskodeit.com/practice');

//fill Data

await page.locator('.inputs').nth(0).fill('Gavuransh and Rutveg');
await page.getByPlaceholder('Start Typing...').fill('Gavuransh and Rutveg');

// //select Data
await page.getByPlaceholder('Start Typing...').click();
await page.keyboard.press('Control+A');
await page.waitForTimeout(2000);
// await page.keyboard.press('Control+C');
// await page.waitForTimeout(2000);
// await page.getByPlaceholder('Enter Your Name').click();
// await page.keyboard.press('Control+V');


//Delete
await page.keyboard.press('Delete');
//await page.keyboard.press('Backspace');



//page.close();
//context.close();
//browser.close();

}

OpenBrowser();