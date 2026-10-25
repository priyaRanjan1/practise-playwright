import {test,expect} from '@playwright/test'
test('google test',async({page})=>{
    await page.goto('https://www.google.com/')
    const data=await page.locator('div #SIvCob a')
    const results=await data.allTextContents()
    console.log(await results)
   console.log(await data.count())
   for(let values of results){
        if(values==="ગુજરાતી"){
           await page.getByText('ગુજરાતી').click()
        }
   }
})