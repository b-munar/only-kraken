const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const { faker } = require('@faker-js/faker');

When('I enter post content faker pseudo', async function(){
    let element = await this.driver.$('div[data-placeholder="Begin writing your post..."]');
    let content = faker.hacker.phrase()
    return await element.setValue(content);
  })

When('I enter post title random title to the limit with faker pseudo', async function(){
  let element = await this.driver.$('textarea[placeholder="Post Title"]');
  let title = faker.lorem.words(100)
  return await element.setValue(title);
})
  