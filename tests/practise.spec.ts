import {test,expect} from '@playwright/test'
test('my test',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('.form-check').nth(1).click()
    await page.getByRole('radio',{name:'Male', exact:true}).click()
    await page.getByLabel('Sunday').click()
    await page.getByLabel('Monday').click()
    await expect(page.locator('#sunday')).toBeChecked()
    const country=page.locator('#country')
    await country.click()
    await country.selectOption('United States')
    await country.selectOption({label:'Canada'})
    await country.selectOption({index:2})
    await country.selectOption({value:"germany"})
    await page.waitForTimeout(3000)
})
test('final',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const startdate='18'
    const month=''
    const year='2026'
    await page.locator('#txtDate').click()
    const monthlocator=await page.locator('.ui-datepicker-month')
    monthlocator.click()
    monthlocator.selectOption('Jan')
    const yearlocator=await page.locator('.ui-datepicker-year')
    yearlocator.click()
    yearlocator.selectOption('2026')
    await page.getByText(startdate,{exact:true}).click()
    //await page.waitForTimeout(5000)

    /*const nextclick=await page.getByText('Next')
   while(true){
     if((await monthlocator.textContent()===month)&&(await yearlocator.textContent()===year)){
        await page.getByText(startdate,{exact:true}).click()
        break
    }
    await nextclick.click()
   }*/
})
test.only('finall',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const results=await page.locator('[href="https://testautomationpractice.blogspot.com/2018/09/automation-form.html"]').textContent()
    console.log(results)
})
