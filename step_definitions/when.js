const { When } = require("@wdio/cucumber-framework");

When('I search for {string}', async (searchKeyWord) => {
   const element = $("#gh-ac");
   await element.setValue(searchKeyWord);
   (await $("#gh-btn")).click();
  });