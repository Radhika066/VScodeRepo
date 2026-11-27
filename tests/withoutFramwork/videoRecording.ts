import { Browser, BrowserContext, chromium, Page } from "@playwright/test";


async function Videorecords():Promise<void>
 {
    let browser:Browser=await chromium.launch ({headless:false})
    let context:BrowserContext=await browser.newContext({
        recordVideo:
        {
            dir:'D:/Ganesh DJ',
            size:
            {
                width:1200,
                height:1000
            }
        }
    });
    let page:Page= await context.newPage();
    await page.goto("https://www.letskodeit.com/practice");

  //select text 
      await page.locator('.inputs').nth(0).fill("Radhika Ganesh Jadhav");

    await page.locator('.inputs').nth(0).click();
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(2000);
   //copy Text
   await page.keyboard.press('Control+C');
   await page.waitForTimeout(2000);
   //peast text
    
   await page.locator('.inputs').nth(3).click();
   await page.keyboard.press('Control+V');

 }
Videorecords();