Feature: Edit settings

   As a super admin
   I should be able to edit settings
   In order to change the text on the initial page of SUMO

   Scenario: Login
      Given I go to the Sumo login page
      When I click to login
        When I fill the username with "email@ciandt.com"
        When I fill the password with "password"
    Then I should see first page of SUMO
