Feature: Create Tag - Crear Tag

@user1 @web
Scenario: As an administrator user I create a tag with the name and description - Como usuario administrador creo un tags con el nombre y descripcion
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
  And I enter Tag Name "$name_1"
  And I wait for 1 seconds
  And I enter tag description random description to the limit with faker pseudo
  And I wait for 1 seconds
  And I click save for Tag
