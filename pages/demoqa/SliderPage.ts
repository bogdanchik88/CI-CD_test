import { Page, Locator, FrameLocator, expect } from "@playwright/test";
import { BasePage } from "../BasePage";

export class SliderPage extends BasePage{

    private readonly slider: Locator
    private readonly sliderValue: Locator

    constructor(page: Page){
        super(page)

        this.slider = page.locator('#slider')
        this.sliderValue = page.locator('#sliderValue')
    }

    async getValue(){
        return Number(await this.sliderValue.textContent())
    }

    async moveForward(steps: number = 1){
        await this.slider.click()

        for(let i: number = 0; i < steps; i++){
            await this.slider.press('ArrowRight')
        }
    }

    async moveBackward(steps: number = 1){
        await this.slider.click()

        for(let i: number = 0; i < steps; i++){
            await this.slider.press('ArrowRight')
        }
    }
}