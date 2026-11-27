import { Browser, BrowserContext, chromium, Page } from "@playwright/test";


async function DynamicWeight() :Promise<void>
{
    let browser : Browser= await chromium.launch({headless:false})
    let context :BrowserContext =await browser.newContext();
    let page:Page = await context.newPage();

    await page.goto('https://demoqa.com/dynamic-properties');

    await page.locator('#visibleAfter').waitFor ({
state:'visible',
timeout:100000
})

// console.log(await page.locator('#visibleAfter').isVisible());

// }

// DynamicWeight();

  await page.goto('https://www.letskodeit.com/practice');
  await page.waitForSelector('#username');
  
  }

DynamicWeight();