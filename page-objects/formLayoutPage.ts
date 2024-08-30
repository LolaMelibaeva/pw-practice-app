import { Page } from "@playwright/test";
import { HelpBase } from "./helperBase";
 
export class FormLayoutPage extends HelpBase{

    

constructor (page: Page){
    super(page)
}
/**
 * 
 * @param email 
 * @param password 
 * @param optoinText 
 */
async submitUisngTheGridFormWithCredentialsAndSelectOption(email: string, password: string, optoinText: string){
    const usingTheGridInput = this.page.locator('nb-card', { hasText: "Using the Grid" })
    await usingTheGridInput.getByRole('textbox', { name: "Email" }).fill(email)
    await usingTheGridInput.getByRole('textbox', { name: "Password" }).fill(password)
    await usingTheGridInput.getByRole('radio', { name: optoinText }).check({ force: true })
    await usingTheGridInput.getByRole('button').click()

}

/**
 * This method will fil out Inline form with user details
 * @param name -- should be first and last name
 * @param email -- should be valid test user's email address
 * @param rememberMe -- should true or false if user session should be saved
 */

async submitInlineFormWithNameEmailCheckbox(name: string, email: string, rememberMe: boolean){
    const usingTheGridInput = this.page.locator('nb-card', { hasText: "Inline form" })
    await usingTheGridInput.getByRole('textbox', { name: "Jane Doe" }).fill(name)
    await usingTheGridInput.getByRole('textbox', { name: "Email" }).fill(email)
    if (rememberMe == true){
        await usingTheGridInput.getByRole('checkbox').check({ force: true })

    }
    


}

}