Feature: Send Staff Invitation to same email (error) - Enviar invitacion de Staff a un mismo email 

@user1 @web
Scenario: As an administrator user I send a staff invitation to the same email- Como usuario administrador envio una invitacion de staff a un mismo email
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
  And I click Invite people
  And I wait for 2 seconds 
  And I enter invite email "<INVITEEMAIL3>"
  And I wait for 2 seconds
  And I click Send invitation
  And I wait for 3 seconds
  And I reload Staff page
  And I wait for 2 seconds
  And I check the invitation was sent to email "<INVITEEMAIL3>"
  And I wait for 2 seconds
  And I click Invite people
  And I wait for 2 seconds 
  And I enter invite email "<INVITEEMAIL3>"
  And I wait for 2 seconds
  And I click Send invitation
  And I wait for 2 seconds
  Then I check there is an error response
  And I wait for 2 seconds 
  And I click on exit invite
  And I wait for 2 seconds 
  And I reload Staff page
  And I wait for 2 seconds
  And I check there is only one invitation for email "<INVITEEMAIL3>"