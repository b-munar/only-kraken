const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const { faker } = require('@faker-js/faker');

When('I enter Tag Description faker pseudo', async function(){
    let element = await this.driver.$('textarea[id="tag-description"]');
    let content = faker.hacker.phrase()
    return await element.setValue(content);
  })

When('I enter tag description random description to the limit with faker pseudo', async function(){
    let element = await this.driver.$('textarea[id="tag-description"]');
    let title = faker.lorem.words(500)
    return await element.setValue(title);
})

When('I change Location too large to faker pseudo', async function(){
  let element = await this.driver.$('input[id="user-location"]');
  const location = faker.lorem.words(500)
  return await element.setValue(location);
})

When('I change email to invalid faker pseudo', async function(){
  let element = await this.driver.$('input[id="user-email"]');
  const email = faker.lorem.word()
  return await element.setValue(email);
})