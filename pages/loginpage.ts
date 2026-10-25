import {Page,Locator} from '@playwright/test'
export class Login{
    //create objects
    page:Page
    email:Locator
    pasword:Locator
    loginButton:Locator
    errorMessage:Locator

    //create constructor
    constructor(page:Page){
        this.page=page
        this.email=this.page.locator('#userEmail')
        this.pasword=this.page.locator('#userPassword')
        this.loginButton=this.page.locator('#login')
        this.errorMessage=this.page.locator('#toast-container')
    }
    async launchUrl(url:string){
        await this.page.goto(url)
    }
    async logintoapp(email:string,password:string){
        await this.email.fill(email)
        await this.pasword.fill(password)
        await this.loginButton.click()
    }
}