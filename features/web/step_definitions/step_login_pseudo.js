const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const { faker } = require('@faker-js/faker');

When('I enter email random email to the limit with faker pseudo', async function(){
    let element = await this.driver.$('input[placeholder="Email Address"]');
    let title = faker.lorem.slug(50)+'@'+faker.lorem.word()+'.'+faker.lorem.word()
    return await element.setValue(title);
  })

When('I enter password random password to the limit with faker pseudo', async function(){
    let element = await this.driver.$('input[placeholder="Password"]');
    let title = faker.internet.password(500)
    return await element.setValue(title);
})