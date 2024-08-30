import { test, expect } from "@playwright/test";


test('input Field', async ({ page }, testInfo )  => {
    await page.goto('/')
    if(testInfo.project.name == 'mobile') {
        await page.locator('.sidebar-toggle').click()
    }
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
    if(testInfo.project.name == 'mobile') {
        await page.locator('.sidebar-toggle').click()
    }

    const usingTheGridInput = page.locator('nb-card', { hasText: "Using the Grid" }).getByRole('textbox', { name: "Email" })
    // await usingTheGridInput.click()
    await usingTheGridInput.fill('test@test.com')
    await usingTheGridInput.clear()
    await usingTheGridInput.pressSequentially('test2@test.com')

    //using assertion

    const inputValue = await usingTheGridInput.inputValue()
    expect(inputValue).toEqual('test2@test.com')

    //locator assertion

    await expect(usingTheGridInput).toHaveValue('test2@test.com')

})