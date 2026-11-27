import { Browser, BrowserContext, chromium, Page } from "@playwright/test";


async function Screenshot():Promise<void>
 {
    let browser:Browser=await chromium.launch ({headless:false})
    let context:BrowserContext=await browser.newContext();
    let page:Page= await context.newPage();
    //await page.goto("https://www.amazon.in/");


     await page.goto("https://www.amazon.in/", {
        waitUntil: "domcontentloaded"
    });
//Full page screenshot
    //await page.waitForTimeout(5000);

    //Dynamic WakeLockSentinel

   //  const searchBox = page.locator("#twotabsearchtextbox");

   //  await searchBox.waitFor({
   //      state: "visible",
   //      timeout: 30000
   //  });
         const time=Date.now()
    await page.screenshot({
        path:`D:/Image 1 ${time}.png`,
        fullPage:true
    
    })
      console.log("Screenshot saved successfully!");


 // specific element screenshot
//  const time= Date.now()
//  const element = await page.getByText('Checkbox Example');
//  await element.screenshot ({
//     path:`D:\Image 2 ${time}.png`
//  })   
 }

Screenshot()