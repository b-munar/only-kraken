const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I enter email too big apriori', async function(){
  let element = await this.driver.$('input[placeholder="Email Address"]');
  const email = this.apriori.sentence_big
  return await element.setValue(email);
})

Then('I check for error in email apriori', async function(){
  let element = await this.driver.$('div[class="form-group error ember-view"]');
  return expect(element).to.exist;;
})

When('I enter password too big apriori', async function(){
  let element = await this.driver.$('input[placeholder="Password"]');
  const email = this.apriori.sentence_big
  return await element.setValue(email);
})

Then('I check for error in password apriori', async function(){
  let element = await this.driver.$('div[class="form-group error ember-view"]');
  return expect(element).to.exist;;
})