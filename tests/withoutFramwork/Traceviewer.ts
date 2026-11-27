import { Browser, BrowserContext, chromium, Page } from "@playwright/test";


async function TraceViewer() :Promise<void>
{
    let browser : Browser= await chromium.launch({headless:false})
    let context :BrowserContext =await browser.newContext();

    await context.tracing.start(
        {
            screenshots:true,
            snapshots:true
        }
    );
    let page:Page = await context.newPage();

    await page.goto('https://demo.automationtesting.in/FileDownload.html');


    await context.tracing.stop({
        path:'D:/TestingData/Rutveg.zip'
    });
}
 TraceViewer() 