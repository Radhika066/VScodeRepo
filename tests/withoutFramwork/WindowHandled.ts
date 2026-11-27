import { Browser, BrowserContext, chromium, Page } from "@playwright/test";


async function WindowHandled()
 {
    let browser:Browser=await chromium.launch ({headless:false})
    let context:BrowserContext=await browser.newContext();
    let page:Page= await context.newPage();
    await page.goto("https://www.letskodeit.com/practice");

    //handel window- store in child window

const [child]= await Promise.all([
context.waitForEvent('page'),
 page.locator('#openwindow').click()
]);

    await child.waitForLoadState();
    await child.getByText('INTERVIEW').click();
    // await child.close();
    // await page.locator('#bmwcheck').click();
    await page.bringToFront();
    console.log(await child.title());
    await child.close();
}
WindowHandled();

