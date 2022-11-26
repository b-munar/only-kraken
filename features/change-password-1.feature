Feature: Change password - Cambiar contraseña

@user1 @web
Scenario: As an administrator user I change password - Como usuario administrador cambiare contraseña
  Given I navigate to page "<HOST>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 2 seconds
  And I click Staff for Change Password
  And I wait for 1 seconds
  And I click in user Staff "<NAME>"
  And I wait for 1 seconds
  And I enter Old Password "<PASSWORD>"
  And I wait for 3 seconds
  And I enter New Password "<PASSWORD_2>"
  And I wait for 3 seconds
  And I enter Verify Password "<PASSWORD_2>"
  And I wait for 3 seconds
  And I click Change Password
  And I wait for 3 seconds
  And I enter Old Password "<PASSWORD_2>"
  And I wait for 3 seconds
  And I enter New Password "<PASSWORD>"
  And I wait for 3 seconds
  And I enter Verify Password "<PASSWORD>"
  And I wait for 3 seconds
  And I click Change Password
  And I wait for 3 seconds