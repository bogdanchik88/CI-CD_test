import { expect, test } from '@playwright/test'
import { ButtonPage } from '../../pages/demoqa/ButtonsPage'


test.describe('Тесты страницы кнопок', () => {
    let buttonPage: ButtonPage

    test.beforeEach(async ({page}) => {
        buttonPage = new ButtonPage(page)

        await buttonPage.goto()
    })

    test('Проверка нажатия кнопок', async () => {
        await buttonPage.pressButtons()
    })
})