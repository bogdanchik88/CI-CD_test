import { Page, Locator, FrameLocator, expect } from "@playwright/test";
import { BasePage } from "../BasePage";

export class IFramesPage extends BasePage{

    private readonly firstIFrame: FrameLocator
    private readonly secondIFrame: FrameLocator

    constructor(page: Page){
        super(page)

        this.firstIFrame = page.frameLocator('#frame1')
        this.secondIFrame = page.frameLocator('[srcdoc]')
    }

    async goto(){
        await this.navigate('/nestedframes')
    }

    async checkIFrames(){
        await expect(this.secondIFrame.locator('p')).toHaveText('Child Iframe')
    }
}