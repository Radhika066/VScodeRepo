import {test} from  "@playwright/test" ;

test (`Verify edso learn open application` , async({page})=>{
await page.goto('https://www.letskodeit.com/practice')
});


test(`Verify people nexuas application` , async({page}) =>{
    await page.goto('http://www.peoplenexusconsultinggroup.com/')
})