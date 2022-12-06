import { Then } from "@wdio/cucumber-framework";
import verifyResultsCount  from "../support/assertions/verifyResultsCount";"../support/assertions/verifyResultsCount";

Then('I see the search results', async () => {
  await verifyResultsCount(0, $$("#srp-river-results"))
    //await expect($$("#srp-river-results").length).not.toBe(0);
  });