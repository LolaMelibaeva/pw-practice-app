import {test, expect} from "@playwright/test"
import {NavigationPage} from "../page-objects/navigationPage"
import {FormLayoutPage} from "../page-objects/formLayoutPage"
import {DatepickerPage} from "../page-objects/datepickerPage"
import {PageManager}   from "../page-objects/pageManager"
import {faker} from "@faker-js/faker"

test.beforeEach(async ({ page }) => {

    await page.goto('/')

})

test('navigate to form page @smoke', async ({page}) => {
     
    const pm = new PageManager(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datepickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()

})


test.skip('parametrised methods @smoke @regression', async ({page}) =>{

    const pm = new PageManager(page)
   const randomFullName = faker.name.fullName()
   const randomEmail = `${randomFullName.replace(' ', '')}${faker.datatype.number(1000)}@gmail.com`

    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitUisngTheGridFormWithCredentialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, 'Option 2')
    await page.screenshot({path: 'screenshots/formsLayotsPage.png'})
    //const buffer = await page.screenshot()
   // console.log(buffer.toString('base64'))
    await pm.onFormLayoutsPage().submitInlineFormWithNameEmailCheckbox(randomFullName, randomEmail, false)

    await page.locator('nb-card', { hasText: "Inline form" }).screenshot({path: 'screenshots/inlineForm.png'})
    await page.waitForTimeout(1000)
    await pm.navigateTo().datepickerPage()      
    await page.waitForTimeout(2000)
    await pm.onDatepickerPage().selectCommonDatePickerBeforeFromToday(1)
    await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(1, 2)  
     
    
})

 