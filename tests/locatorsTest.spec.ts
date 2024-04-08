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
    await page.locator("//input[@id='username']").fill("admin")
})