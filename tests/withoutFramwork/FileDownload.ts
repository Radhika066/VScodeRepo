import { Browser, BrowserContext, chromium, Page } from "@playwright/test";


async function FileDownload() :Promise<void>
{
    let browser : Browser= await chromium.launch({headless:false})
    let context :BrowserContext =await browser.newContext();
    let page:Page = await context.newPage();

    await page.goto('https://demo.automationtesting.in/FileDownload.html');

    //await page.locator('.btn-primary').click();

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('.btn-primary').click()
    ]);

    await download.saveAs('D:/Radhika.pdf');


}
FileDownload() 