import { Browser, BrowserContext, chromium, Page } from "@playwright/test";


async function MouseAction() 
{
    let browser : Browser= await chromium.launch({headless:false})
    let context :BrowserContext =await browser.newContext();
    let page:Page = await context.newPage();

    //Double click 
    // await page.goto('https://qa-practice.netlify.app/double-click');
    // await page.locator('#double-click-btn').dblclick();

    //Mouse Hover 
    // await page.goto('https://www.flipkart.com/');
    // await page.getByText('✕').click();
    // await page.waitForTimeout(2000);
    // await page.getByText('Login').hover();


//Drag and Drop
// await page.goto('https://selenium08.blogspot.com/2020/01/drag-drop.html');
//     await page.locator('#draggable').dragTo(page.locator('#droppable'));

//Scrollup or scrolldown by wheel 
// await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
// const element = await page.getByText('Disclaimer');
// await element.scrollIntoViewIfNeeded();

//Keyboard Action

    }
    MouseAction();