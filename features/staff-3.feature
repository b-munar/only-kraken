Feature: Update Owner (staff) Info - Actualizar informacion de dueño

@user1 @web
Scenario: As an administrator user I update owner info - Como usuario administrador actualizo al informacion del dueño (staff)
  Given I navigate to page "<HOST>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 5 seconds
  And I click Staff
  And I wait for 2 seconds
  And I click on Owner
  And I wait for 2 seconds
  And I change Full name to "<NEWNAME>"
  And I wait for 2 seconds
  And I change Slug to "<NEWSLUG>"
  And I wait for 2 seconds
  And I change Location to "<NEWLOCATION>"
  And I wait for 2 seconds
  And I click Owner Save
  And I wait for 3 seconds
  And I click Staff
  And I wait for 2 seconds
  And I click on Owner
  And I wait for 2 seconds
  Then I check Full name is updated to "<NEWNAME>"
  And I wait for 2 seconds
  And I check Slug is updated to "<NEWSLUG>"
  And I wait for 2 seconds
  And I check Location is updated to "<NEWLOCATION>"