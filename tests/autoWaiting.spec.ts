import { test, expect } from "@playwright/test";



test.beforeEach(async ({ page }, testInfo) => {
    await page.goto(process.env.URL)
    await page.getByText("Button Triggering AJAX Request").click()
    testInfo.setTimeout(testInfo.timeout + 2000)
    
  
  
  })

test('auto-Waiting', async ({page})=> {

    const pageSuccessButton = page.locator('.bg-success')
   // await pageSuccessButton.click()
   // const text = await pageSuccessButton.textContent()
    await pageSuccessButton.waitFor({state: "attached"})

    const text = await pageSuccessButton.allTextContents()

  //  expect(text).toContain('Data loaded with AJAX get request.')
    expect(pageSuccessButton).toHaveText('Data loaded with AJAX get request.', {timeout: 30000})




})

test.skip('alertnative waits', async ({page}) => {
    const pageSuccessButton = page.locator('.bg-success')

    //waitfor element
  //  await page.waitForSelector('.bg-success')
    
    //wait for application response

  //  await page.waitForResponse('http://uitestingplayground.com/ajaxdata')
  // wait for network call to be completed ('NOT RECOMMENDED')

  await page.waitForLoadState('networkidle')
//
    const text = await pageSuccessButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')


     

})

test('timeouts', async ({page}) => {

   // test.setTimeout(10000)
    test.slow()
    const pageSuccessButton = page.locator('.bg-success')
    await pageSuccessButton.click()



})  