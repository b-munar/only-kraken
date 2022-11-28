Feature: Login password too long 

@user1 @web
Scenario: As an administrator user I login wih password too long 
  Given I navigate to page "<HOST>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password random password to the limit with faker pseudo
  And I wait for 2 seconds
  And I click sign in
  And I wait for 5 seconds
  Then I check for error in password apriori