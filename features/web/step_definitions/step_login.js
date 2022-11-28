const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const { faker } = require('@faker-js/faker');

When('I enter email {kraken-string}', async function(email){
  let element = await this.driver.$('input[placeholder="Email Address"]');
  return await element.setValue(email);
})

When('I enter password {kraken-string}', async function(password){
  let element = await this.driver.$('input[placeholder="Password"]');
  return await element.setValue(password);
})

When('I click sign in', async function(){
  let element = await this.driver.$('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]');
  return await element.click();
})

When('I enter email {kraken-string} V4.44', async function(email){
  let element = await this.driver.$('input[name="identification"]');
  return await element.setValue(email);
})

When('I enter password {kraken-string} V4.44', async function(password){
  let element = await this.driver.$('input[name="password"]');
  return await element.setValue(password);
})

When('I click sign in V4.44', async function(){
  let element = await this.driver.$('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]');
  return await element.click();
})

When('I enter email random email to the limit with faker', async function(){
  let element = await this.driver.$('input[placeholder="Email Address"]');
  let title = faker.lorem.slug(50)
  return await element.setValue(title);
})

When('I enter password random password to the limit with faker', async function(){
  let element = await this.driver.$('input[placeholder="Password"]');
  let title = faker.lorem.slug(50)
  return await element.setValue(title);
})