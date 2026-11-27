import { chromium } from "@playwright/test";

async function Screenshot(): Promise<void> {
    const browser = await chromium.launch({
        headless: false
    });

    const page = await browser.newPage();

    // Navigate to Amazon
    await page.goto("https://www.amazon.in/", {
        waitUntil: "load",
        timeout: 60000
    });

    // Wait dynamically for Amazon's search box
    const searchBox = page.locator("#twotabsearchtextbox");
    await searchBox.waitFor({
        state: "visible",
        timeout: 30000
    });

    // Debug: verify page content
    console.log("Page title:", await page.title());
    console.log("Page URL:", page.url());

    // Take screenshot
    const time = Date.now();

    await page.screenshot({
        path: `D:/Image_1_${time}.png`,
        fullPage: true
    });

    console.log("Screenshot saved successfully!");

    await browser.close();
}

Screenshot();