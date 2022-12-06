import { Given } from "@wdio/cucumber-framework";
import goToUrl from "../support/actions/goToUrl";
import homePage from "../page_objects/homePage"

Given('I opened ebay', async () => {
   await goToUrl(homePage.url);
  });