Feature: Tour of Heroes

   As a user of Tour of Heroes
   I should be able to search Heroes
   In order to find a desired hero

   Scenario: Do search and navigate to a hero detail
      Given I go to the Dashboard page
      When I type "Man" in the search field
      Then I should see the "Iron Man" and "Spider-Man" as search results
