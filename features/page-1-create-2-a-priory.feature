Feature: Create Page with limit title apriori- Crear Page

@user1 @web
Scenario: As an administrator user I create a page with limit title apriori - Como usuario administrador creo un page
  Given I navigate to page "<HOST>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 5 seconds
  And I click Pages
  And I wait for 2 seconds
  And I click New Page
  And I wait for 2 seconds
  And I enter title random title to the limit apriori
  And I wait for 2 seconds
  And I enter content apriori
  And I wait for 2 seconds
  Then I click Publish Dropdown apriori
