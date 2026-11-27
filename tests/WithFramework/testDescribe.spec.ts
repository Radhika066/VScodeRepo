import {test} from '@playwright/test';

test.describe(`login Functionality`, {tag:'@smoke'} ,async()=>
{
    test(`Verify valid Login `,async ({page})=>{
        console.log("Valid Login")
    });
    test(`Verify valid Login with blank Username and Valid Password `,async ({page})=>{
       console.log("inValid Login")
    });
    test(`Verify valid Login with Valid Username and INValid Password `,async ({page})=>{
    console.log("InValid Login")
    });
    test(`Verify valid Login with InValid Username and Valid Password `,async ({page})=>{
      console.log("InValid Login")
    });
     test(`Verify valid Login with InValid Username and InValid Password `,async ({page})=>{
      console.log("InValid Login")
    });
})