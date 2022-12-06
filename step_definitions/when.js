import { When } from "@wdio/cucumber-framework";
import searchItem from "../support/actions/searchItem";

When('I search for {string}', async (searchKeyWord) => {
    await searchItem(searchKeyWord);
  });