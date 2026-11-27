import {test} from "@playwright/test";

test (`Test case 1` , async ({page}) => {
    console.log(" test case 1")
});


test.skip (`Test case 2` , async ({page}) => {
    console.log("Skip test case")
});

// test.only('Test case 3' , async({page})=> {
//     console.log("print only this 1")
// });

test.fail(`verify test case fail` , async ({page})=>{
console.log("This case is fail")
});

test.fixme(`verify fix me` ,async ({page})=>{
    console.log("Fix me")
});