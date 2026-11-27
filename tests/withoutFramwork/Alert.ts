import { chromium ,Browser, BrowserContext, Page} from "@playwright/test";

async function Alerts()
 {

let browser:Browser= await chromium.launch({headless:false})
let context:BrowserContext=await browser.newContext();
let page:Page=await context.newPage()
 await page.goto('https://www.letskodeit.com/practice');


// page.on('dialog' , async dialog => {

//     console.log(await dialog.type());
//     console.log(await dialog.message());
//     dialog.accept();
// })
//await page.locator('#alertbtn').click();
await page.waitForTimeout(2000);
await page.locator('#confirmbtn').click();
await page.waitForTimeout(2000);
//just for confirmation 

await page.getByText('Orange').click();
 }
 Alerts();