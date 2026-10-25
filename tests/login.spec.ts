import {test,expect} from '@playwright/test'
import { Login } from '../pages/loginpage'
import data from '../test-data/test.json'
let lp:Login
test.beforeEach(async({page})=>{
     lp=new Login(page)
    await lp.launchUrl(data.url)
})
test.describe('login validatio smoketesting',async()=>{
    test.fixme('login success',async({page})=>{
    await lp.logintoapp(data.email,data.pasword)
    await expect(page).toHaveURL(data.successmessage)
})
 test('login failed',async({page})=>{
    await lp.logintoapp(data.email,data.invalidpasword)
    await expect(lp.errorMessage).toContainText(data.errorMsg)
})
})