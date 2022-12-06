const { Then } = require("@wdio/cucumber-framework");

Then('I see the search results', async () => {
    await expect($$("#srp-river-results").length).not.toBe(0);
  });