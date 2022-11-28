Feature: Login username too long 

@user1 @web
Scenario: As an administrator user I login wih username too long 
  Given I navigate to page "<HOST>"
  And I wait for 3 seconds
  When I enter email random email to the limit with faker
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 5 seconds
  Then I check for error in email apriori