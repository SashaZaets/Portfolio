# Portfolio

## Description
This is my Portfolio repository where you can find my tests, checklists, drafts of test design technics.

## Playwright
`cd playwright`
### Installation
```js
npm init playwright@latest
```
### How to run
`npx playwright test apiTests --ui` - to run API tests (choose requests from ./tests/API-testing/apiTests.spec.js)

`npx playwright test login` - to run tests from ./tests/login.spec.js

`npx playwright test assertions --project chromium --headed
` -  to run tests from ./tests/Assertions/assertions.spec.js

`npx playwright test login_demo --project chromium --headed
` - to run tests from ./tests/LoginTest/login_demo.spec.js

`npx playwright test selectors --project chromium --headed
` - to run tests from ./tests/WebObj/selectors.spec.js


## Cypress
### Installation
```js
npm install

```

### How to run
```js
npx cypress open
```
After Cypress opening select file from the list to start the test.

## Test documentation
In the `./testDocumentation` directory you can find my checklists, drafts of test design technics.

