Feature: Create Tag - Crear Tag

@user1 @web
Scenario: As an administrator user I create two tags with the same name - Como usuario administrador creo dos tags con el mismo nombre
  Given I navigate to page "<HOST>"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 3 seconds
  And I click Tags
  And I wait for 1 seconds
  And I click New Tags
  And I wait for 1 seconds
  And I enter Tag Name "new-tag-name"
  And I wait for 1 seconds
  And I enter Tag Description "new-tag-description"
  And I wait for 1 seconds
  And I click save for Tag
  And I wait for 1 seconds
  And I click Tags
  And I wait for 1 seconds
  And I click Tags
  And I wait for 1 seconds
  And I click New Tags
  And I wait for 1 seconds
  And I enter Tag Name "new-tag-name"
  And I wait for 1 seconds
  And I enter Tag Description "new-tag-description"
  And I wait for 1 seconds
  And I click save for Tag
  And I wait for 1 seconds
  And I click Tags
  And I wait for 1 seconds
  And I click Tag "new-tag-name"
  And I wait for 1 seconds
  And I click delete for Tag
  And I wait for 1 seconds
  And I click delete 2 for Tag
  And I wait for 1 seconds
  And I click Tag "new-tag-name-2"
  And I wait for 1 seconds
  And I click delete for Tag
  And I wait for 1 seconds
  And I click delete 2 for Tag
  And I wait for 1 seconds