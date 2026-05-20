import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "../BasePage";


export class RadioButtonPage extends BasePage{

    private readonly YesRadio: Locator
    private readonly ImpressiveRadio: Locator
    private readonly NoRadio: Locator

    constructor(page: Page){
        super(page)

        this.YesRadio = page.locator('input#yesRadio')
        this.ImpressiveRadio = page.locator('input#impressiveRadio')
        this.NoRadio = page.locator('input#noRadio')
    }

    async selectRadio(option: 'Yes' | 'Impressive' | 'No'){
        const radios = {
            Yes: this.YesRadio,
            Impressive: this.ImpressiveRadio,
            No: this.NoRadio
        }
        await radios[option].click()

        if (option === 'No'){
            await expect(radios[option]).not.toBeChecked()
            return
        }

        await expect(radios[option]).toBeChecked()
    }

}