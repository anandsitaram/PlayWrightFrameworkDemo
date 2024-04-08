import {test} from '@playwright/test'

test.beforeEach("Init",async ({page})=>{
    await page.goto("https://o3.openmrs.org/openmrs/spa/login")
})
test.describe("Suite 1",()=>{


    test('First test case',async ({page})=>{
        //await page.goto("https://o3.openmrs.org/openmrs/index.htm?noredirect=true")
        await page.goto("https://o3.openmrs.org/openmrs/spa/login")
        console.log(await page.title())
        await page.locator("input[id='username']").fill("admin")
        await page.getByText("Continue").click()
        await page.locator("input[id='password']").fill("Admin123")
        await page.getByText("Log in").click()
        console.log(await page.title())
        await page.getByText("Service queues").click()
        console.log("Anand")
        console.log(await page.title())
    });


    test.afterEach("tearDown",async ({page})=>{
        await page.close()
    })
})

test.describe("Suite 2",()=>{


    test('First test case',async ({page})=>{
        //await page.goto("https://o3.openmrs.org/openmrs/index.htm?noredirect=true")
        await page.goto("https://o3.openmrs.org/openmrs/spa/login")
        console.log(await page.title())
        await page.locator("input[id='username']").fill("admin")
        await page.getByText("Continue").click()
        await page.locator("input[id='password']").fill("Admin123")
        await page.getByText("Log in").click()
        console.log(await page.title())
        await page.locator("//button[@name='SearchPatientIcon']").click()
        await page.locator("//input[@data-testid='patientSearchBar']").fill("Popescu Andrei")
        console.log("Anand")
        console.log(await page.title())
    });


    test.afterEach("tearDown",async ({page})=>{
        await page.close()
    })
})
