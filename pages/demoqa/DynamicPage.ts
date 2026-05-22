import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "../BasePage";


export class DynamicPage extends BasePage{

    private readonly enableAfterButton: Locator
    private readonly colorChangedButton: Locator
    private readonly visibleAfterButton: Locator

    constructor(page: Page){
        super(page)

        this.enableAfterButton = page.locator('#enableAfter')
        this.colorChangedButton = page.locator('#colorChange')
        this.visibleAfterButton = page.locator('#visibleAfter')
    }

    async goto(){
        this.page.goto('/dynamic-properties')
    }

    async CheckDynamics(){
        await expect(this.enableAfterButton).toBeEnabled()
        await expect(this.colorChangedButton).toHaveClass(/text-danger/)
        await expect(this.visibleAfterButton).toBeVisible()

        await this.enableAfterButton.click()
        await this.colorChangedButton.click()
        await this.visibleAfterButton.click()
    }
}