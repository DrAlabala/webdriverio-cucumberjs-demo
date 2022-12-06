import { Then } from "@wdio/cucumber-framework";
import verifyResults  from "../support/assertions/verifyResults";

Then('I should see the results', () => {
    verifyResults();
});