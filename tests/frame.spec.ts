import {test, expect} from '@playwright/test'
test('framedata',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html')
    const mainframe=await page.frameLocator('#singleframe')
    await mainframe.locator('[type="text"]').first().fill('ramesh')
    await page.locator('[href="#Multiple"]').click()
    const multi=await page.frameLocator('[src="MultipleFrames.html"]')
    const inner=await multi.frameLocator('[src="SingleFrame.html"]')
    await inner.locator('[type="text"]').last().fill('second')
})
test('prompt',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.on('dialog',(dialog)=>{
        dialog.accept('ranjan')
    })
    await page.locator('#promptBtn').click()
})
test.only('pop',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Windows.html')
    const popup= page.waitForEvent('popup')
    await page.locator('[href="http://www.selenium.dev"]').click()
    //await page.locator('#Tabbed button').click()
    const ref=await popup
    //await ref.getByText('Downloads').click()
    await page.bringToFront()


})