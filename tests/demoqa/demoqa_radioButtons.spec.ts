import { expect, test } from '@playwright/test'
import { RadioButtonPage } from '../../pages/demoqa/RadioButtonsPage'

test.describe('demoqa radio buttons test', () => {
    let radioButtonPage: RadioButtonPage

    test.beforeEach(async ({page}) => {
        radioButtonPage = new RadioButtonPage(page)
        await radioButtonPage.goto()
    })

    test('Проверка кнопки Yes', async({page}) => {
        await radioButtonPage.selectRadio('Yes')
    })
})