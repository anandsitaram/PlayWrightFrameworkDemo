### **Playwright Installation :-**

**npm init playwright@latest**

**Playwright Test Execution**

* Headless mode -
**npx playwright test**

* Head mode - 
**npx playwright test --headed**

* To run specific browser
**npx playwright test --project=chrome** 

* To run specific spec file
**npx playwright test example.spec.ts**  

* To run specific test
**npx playwright test -g 'has title'**

* To run in UI mode
  **npx playwright test --ui**

* To Run in trace on
  **npx playwright test --project=chromium --trace on**

* To Run in debug mode
  **npx playwright test --project=chromium --debug**

* To open last HTML report run:
**npx playwright show-report**

Locators


