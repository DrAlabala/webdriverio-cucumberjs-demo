Feature: Adding item to shoping card
As a user I want to be able to add items in my shoping card and thus be able afterward to review them

Scenario: Adding item to my shopping card
    Given I searched for "headfones"
    When I open any item from the list of resutls
    And I add it to my shopping card
    Then I should see that I have "1" item in my card from the ebay home page
    And I should see this item in my shopping card
    