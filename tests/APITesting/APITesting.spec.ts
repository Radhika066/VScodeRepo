
import { test, expect } from "@playwright/test";

test(`Verify Get API Automation for booking`, async ({ request }) => {

    const url = "https://restful-booker.herokuapp.com/booking";

    const method = "GET";

    const headers = {
        Accept: "application/json"
    };

    console.log("================Request===================");

    console.log("Method :          ", method);
    console.log("URL :              ", url);
    console.log("Headers :          ", headers);

    const response = await request.get(url, { headers });

    console.log("================Response===================");

    console.log("Status :        ", response.status());

    const responseBody = await response.json();

    console.log("Body :           ", responseBody);

    // Status code validation
    expect(response.status()).toBe(200);

    // Response validation
    expect(response.ok()).toBeTruthy();

    // Response body validation
    expect(Array.isArray(responseBody)).toBeTruthy();

});
