import {test} from '@playwright/test'

test (`Verify amazon website open @smoke ` , async({page}) =>{
    console.log("Amzop is shopping website")
});

test(`verify filpcart website open @sanity`, async({page}) =>{
    console.log("Filpcart is shoping website")
});

test (`Verify myntra website open`, {tag:['@smoke','@sanity','@regression','@negative']} ,async({page}) =>{
    console.log("Myntra is girls favourite shopping website")
});