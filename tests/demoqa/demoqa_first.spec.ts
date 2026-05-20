import { test } from '@playwright/test'
import { MainPage } from '../../pages/demoqa/MainPage'


test.describe('demoqa first test', () => {
    let mainPage: MainPage

    test.beforeEach( async ({page}) => {
        mainPage = new MainPage(page)
        await mainPage.goto()
    })

    test('have correct title', async ({page}) => {
        await mainPage.haveTitle()
    })
})