Feature: Login password too long apriori

@user1 @web
Scenario: As an administrator user I login wih password too long apriori
  Given I navigate to page "<HOST>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password too big apriori
  And I wait for 2 seconds
  And I click sign in
  And I wait for 5 seconds
  Then I check for error in password apriori