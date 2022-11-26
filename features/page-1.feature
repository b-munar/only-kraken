Feature: Create Page - Crear Page

@user1 @web
Scenario: As an administrator user I create a page - Como usuario administrador creo un page
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
  And I enter title "<PAGETITLE>"
  And I wait for 2 seconds
  And I enter content "<PAGECONTENT>"
  And I wait for 2 seconds
  And I click Publish Dropdown
  And I wait for 2 seconds
  And I click Publish
  And I wait for 3 seconds
  And I click Pages Back
  And I wait for 2 seconds
  Then I check the page is published with title "<PAGETITLE>"