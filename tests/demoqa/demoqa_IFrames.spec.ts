import { test } from '@playwright/test'
import { IFramesPage } from '../../pages/demoqa/IFramesPage'

test.describe('Тесты на iframes', () => {
    let iFramesPage: IFramesPage

    test.beforeEach(async ({page}) => {
        iFramesPage = new IFramesPage(page)
        await iFramesPage.goto()
    })

    test('Проверка iFrames', async () => {
        await iFramesPage.checkIFrames()
    })
})