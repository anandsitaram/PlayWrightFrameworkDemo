import {test} from '@playwright/test'


test('locators',async ({page})=>{

    await page.goto("https://o3.openmrs.org/openmrs/spa/login")
    console.log(await page.title())

    //By tag name
   // await page.locator('input').fill("admin")

    //By Id  - # followed by id value
    //await page.locator('#username').fill("admin")

    //By class name   - . followed by any class name value
  // await page.locator('.cds--text-input').fill("admin")

    //By attribute
   // await page.locator('[name="username"]').fill("admin")

    //By class name  -full value
   // await page.locator("[class='cds--text-input']").fill("admin")

    //By combining different selectors
   // await page.locator('input[name="username"]').fill("admin")

    //By xpath - Not recommended -https://playwright.dev/docs/other-locators
    //await page.locator("//input[@id='username']").fill("admin")

    //By partial text
   // await  page.locator(":text('Cont')").click()

    //By exact text
    //await  page.locator(":text-is('Continue')").click()

    /*await page.getByRole('textbox',{name:"username"}).fill("admin")

    await page.getByText("Continue").click()

   await page.getByLabel("password").fill("Admin123")

    await page.getByText("Log in").click()
    await page.getByPlaceholder("password").click()

     await page.getByTitle("IOT Dashboard").click()

    //Need to pass data-testid attribute value
    await  page.getByTestId("searchPatientIcon").click()*/
})