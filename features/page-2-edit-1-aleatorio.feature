Feature: Edit Page - Editar Page

@user1 @web
Scenario: As an administrator user I edit a page - Como usuario administrador edito un page
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
  And I enter title "<EDITTITLE>"
  And I wait for 2 seconds
  And I enter content "<EDITCONTENT>"
  And I wait for 2 seconds
  And I click Publish Dropdown
  And I wait for 2 seconds
  And I click Publish
  And I wait for 3 seconds
  And I click Pages Back
  And I wait for 2 seconds
  And I check the page is published with title "<EDITTITLE>"
  And I wait for 2 seconds
  And I click on the published page with title "<EDITTITLE>"
  And I wait for 2 seconds
  And I enter title "<EDITEDTITLE>"
  And I wait for 2 seconds
  And I click Update Dropdown
  And I wait for 2 seconds
  And I click Update
  And I wait for 3 seconds
  Then I click Pages Back
  And I wait for 2 seconds
  And I check the page is published with title "<EDITEDTITLE>"