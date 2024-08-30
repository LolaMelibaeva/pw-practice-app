import {test} from "../test-options"
import {NavigationPage} from "../page-objects/navigationPage"
import {FormLayoutPage} from "../page-objects/formLayoutPage"
import {DatepickerPage} from "../page-objects/datepickerPage"
import {PageManager}   from "../page-objects/pageManager"
import {faker} from "@faker-js/faker"

test.beforeEach(async ({ page }) => {

    await page.goto('/')

})




test('parametrised methods', async ({pageManager}) =>{

    
   const randomFullName = faker.name.fullName()
   const randomEmail = `${randomFullName.replace(' ', '')}${faker.datatype.number(1000)}@gmail.com`

    await pageManager.navigateTo().formLayoutsPage()
    await pageManager.onFormLayoutsPage().submitUisngTheGridFormWithCredentialsAndSelectOption(process.env.UN, process.env.PASSWORD, 'Option 2')
    await pageManager.onFormLayoutsPage().submitInlineFormWithNameEmailCheckbox(randomFullName, randomEmail, false)

     
    
})

 