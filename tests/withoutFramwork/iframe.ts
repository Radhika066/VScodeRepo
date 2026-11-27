import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function Iframes ():Promise<void>
 {
   let browser:Browser = await chromium.launch({headless:false});
let context:BrowserContext=await browser.newContext();
let page:Page = await context.newPage();

await page.goto('https://jqueryui.com/datepicker/');

//Get the length
const f = page.frames();
console.log(f.length);
 //Frame locator
 const frame = await page.frameLocator('.demo-frame');
 await frame.locator('#datepicker').click();


 }

 Iframes();