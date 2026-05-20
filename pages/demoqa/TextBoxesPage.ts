import { expect, Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class TextBoxesPage extends BasePage{

    private readonly nameTextbox: Locator
    private readonly emailTextbox: Locator
    private readonly addressTextbox: Locator
    private readonly submitButton: Locator

    private readonly nameResult: Locator
    private readonly EmailResult: Locator
    private readonly addressResult: Locator


    constructor(page: Page){
        super(page)

        this.nameTextbox = page.getByPlaceholder('Full Name')
        this.emailTextbox = page.getByPlaceholder('name@example.com')
        this.addressTextbox = page.getByPlaceholder('Current Address')
        this.submitButton = page.getByText('Submit')

        this.nameResult = page.locator('p#name')
        this.EmailResult = page.locator('p#email')
        this.addressResult = page.locator('p#currentAddress')
    }

    async goto(){
        await this.page.goto('/text-box')
    }

    async enterData(name: string, email: string, address: string){
        await this.nameTextbox.fill(name)
        await this.emailTextbox.fill(email)
        await this.addressTextbox.fill(address)

        await this.submitButton.click()
    }

    async checkResults(name: string, email: string, address: string){
        await expect(this.nameResult).toContainText(name)
        await expect(this.EmailResult).toContainText(email)
        await expect(this.addressResult).toContainText(address)
    }

    getEmailTextBox(){
        return this.emailTextbox
    }
}