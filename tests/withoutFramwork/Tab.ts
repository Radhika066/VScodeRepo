import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function Practices() {
    

let browser:Browser=await chromium.launch({headless:false})
let context:BrowserContext=await browser.newContext()
let page:Page =await context.newPage()
await page.goto('https://www.letskodeit.com/practice')

const [child] = await Promise.all([
context.waitForEvent('page'),
page.getByText('Open Tab').click()

]);

await child.waitForLoadState();
await child.getByText('INTERVIEW').click();
console.log(await child.title());
//await child.close();
await page.getByLabel('bmw');

await page.close()
}
Practices();