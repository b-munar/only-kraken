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