import { Given } from "@wdio/cucumber-framework";
import goToUrl from "../support/actions/goToUrl";

Given('I opened ebay', async () => {
   await goToUrl("/")
  });