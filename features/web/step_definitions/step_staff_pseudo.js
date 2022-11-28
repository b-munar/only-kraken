const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const { faker } = require('@faker-js/faker');

When('I enter invite email faker pseudo', async function(){
    let element = await this.driver.$('input[placeholder="Email Address"]');
    let email = faker.internet.email()
    return await element.setValue(email);
  })

When('I change Location faker pseudo', async function(){
    let element = await this.driver.$('input[id="user-location"]');
    let location = faker.address.city()
    return await element.setValue(location);
})

When('I enter empty invite email faker pseudo', async function(){
  let element = await this.driver.$('input[placeholder="Email Address"]');
  const email = '';
  return await element.setValue(email);
})

When('I enter not email invite email faker pseudo', async function(){
  let element = await this.driver.$('input[placeholder="Email Address"]');
  const email = faker.hacker.phrase()
  return await element.setValue(email);
})