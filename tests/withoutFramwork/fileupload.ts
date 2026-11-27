import { Browser, BrowserContext, chromium, Page } from "@playwright/test";


async function Fileupload() :Promise<void>
{
    let browser : Browser= await chromium.launch({headless:false})
    let context :BrowserContext =await browser.newContext();
    let page:Page = await context.newPage();

//     await page.goto("https://the-internet.herokuapp.com/upload");

//     await page.locator('#file-upload').setInputFiles('D:/Ganesh DJ/3rd floor.xlsx');
//     await page.waitForTimeout(9000);
//    await page.locator('#file-submit').click();

await page.goto('https://practice.expandtesting.com/upload?utm_source=chatgpt.com#google_vignette');

await page.locator('#fileInput').setInputFiles([
    'D:/Ganesh DJ/3rd .xlsx',
    'D:/Ganesh DJ/4th .xlsx',
    'D:/Ganesh DJ/5th .xlsx'
]);

await page.locator('#fileSubmit').click();


}
Fileupload()