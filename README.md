# Demo Project
This is a demo project that was build by using webdriverIO and cucumber-js.

## Used Tools
I used webdriverIO and the embedded support for cucumber-js.
For reporting I have setup the allure-report which also can be configured from webdriverIO


## Structure

1. `features` holds of the feature files
2. `page-objects` holds the classes that represent each of the different page that we interact with
3. `step-definitions` holds all the step definitions required. To keep it even more structured the steps for give, when and then are located respectivetely in `given`, `when` and `then` folders
4. `support` holds all the actions and assertions.
5. `allure-report` holds all the files needed for the allure report.


## Runinng the tests
```
npm run wdio
```

## Opening the report
```
open_report
```
