import { expect, test } from '@playwright/test'
import { TextBoxesPage } from '../../pages/demoqa/TextBoxesPage'
import { randomEmail, randomString, wrongEmail } from '../../helpers/textBoxesData'


test.describe('demoqa textboxes test', () => {
    let textBoxesPage: TextBoxesPage

    test.beforeEach( async ({page}) => {
        textBoxesPage = new TextBoxesPage(page)
        await textBoxesPage.goto()
    })

    test('Правильные данные', async () => {
        const name = randomString()
        const email = randomEmail()
        const address = randomString()

        await textBoxesPage.enterData(name, email, address)

        await textBoxesPage.checkResults(name, email, address)
    })

    test('Неправильный email', async () => {
        const emailTextbox = textBoxesPage.getEmailTextBox()
        const name = randomString()
        const email = wrongEmail()
        const address = randomString()

        await textBoxesPage.enterData(name, email, address)
        await expect(emailTextbox).toHaveClass(/error/)
    })
})