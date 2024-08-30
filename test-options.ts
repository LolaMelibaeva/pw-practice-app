import {test as baseURL} from "@playwright/test"
import { PageManager } from "./page-objects/pageManager"

export type TestOptions = {
    globalQAUrl: string
    formLayoutsPage: string
    pageManager: PageManager

}
export const test = baseURL.extend<TestOptions>({
    globalQAUrl: ['', {option: true}],

    formLayoutsPage: async({page}, use) => {
        await page.goto('/')
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
        await use('')
        console.log('Tear Down')
    },

    pageManager: async({page, formLayoutsPage}, use ) => {
        const pm = new PageManager(page)
        await use(pm)
    }
})

