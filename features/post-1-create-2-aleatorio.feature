Feature: Create Post - Crear Post

@user1 @web
Scenario: As an administrator user I create a post - Como usuario administrador creo un post
  Given I navigate to page "<HOST>"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 3 seconds
  And I click Post
  And I wait for 2 seconds
  And I click New Post
  And I wait for 2 seconds
  And I enter post title random title to the limit with faker
  And I wait for 2 seconds
  And I enter Post content "$name_2"
  And I wait for 2 seconds