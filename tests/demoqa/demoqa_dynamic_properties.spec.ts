import { test } from '@playwright/test'
import { DynamicPage } from '../../pages/demoqa/DynamicPage'


test.describe('Тесты страниц с динамическими свойствами', () => {
    let dynamicPage: DynamicPage

    test.beforeEach( async ({page}) => {
        dynamicPage = new DynamicPage(page)

        await dynamicPage.goto()
    })

    test('Проверка динамических свойств', async ({page}) => {
        await dynamicPage.CheckDynamics()
    })
})