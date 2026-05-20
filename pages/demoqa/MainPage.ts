import { expect, Page } from "@playwright/test";
import { BasePage } from "../BasePage";


export class MainPage extends BasePage{

    constructor(page: Page){
        super(page)
    }

    async goto(){
        await this.page.goto('/')
    }

    async haveTitle(){
        await expect(this.page).toHaveTitle('demosite')
    }
}