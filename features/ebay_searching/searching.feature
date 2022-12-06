Feature: Searching for an item at ebay
As a user when I search for specific item at ebay I want to see the search results.

Background: Open ebay
    Given I opened ebay

Scenario: Search for an item
    When  I search for "headphones"
    Then  I should see the results
