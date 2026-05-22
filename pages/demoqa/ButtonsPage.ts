import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "../BasePage";

export class ButtonPage extends BasePage{

    private readonly dbClickButton: Locator
    private readonly rightClickButton: Locator
    private readonly normalButton: Locator
    
    private readonly dbClickMessage: Locator
    private readonly rightClickMessage: Locator
    private readonly normalClickMessage: Locator

    constructor(page: Page){
        super(page)

        this.dbClickButton = page.locator("#doubleClickBtn")
        this.rightClickButton = page.locator('#rightClickBtn')
        this.normalButton = page.getByText('Click Me', {exact: true})

        this.dbClickMessage = page.locator('#doubleClickMessage')
        this.rightClickMessage = page.locator('#rightClickMessage')
        this.normalClickMessage = page.locator('#dynamicClickMessage')
    }

    async goto(){
        await this.navigate('/buttons')
    }

    async pressButtons(){
        await this.dbClickButton.dblclick()
        await this.rightClickButton.click({ button: 'right' })
        await this.normalButton.click()
        
        await expect(this.dbClickMessage).toBeVisible()
        await expect(this.rightClickMessage).toBeVisible()
        await expect(this.normalClickMessage).toBeVisible()
    }
}