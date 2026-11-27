import {test} from '@playwright/test';

test.beforeAll(async()=>{
    console.log("BeforeAll")
});

test.afterEach(async()=>{
    console.log("After Each");
}); 

test.beforeEach(async()=>{
    console.log("BeforeEach")
});

test (`Verify the test functionality` , async({page})=>{
    console.log("This functionality must be work")
});



test (`Verify the test functionality one` , async({page})=>{
    console.log("This functionality not to be work")
});

test.afterAll(async()=>{
    console.log("afterAll")
});