const { Given } = require("@wdio/cucumber-framework");

Given('I opened ebay', async () => {
    browser.url("/");
  });