const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;


When('I enter Old Password apriori', async function(){
  let element = await this.driver.$('input[id="user-password-old"]');
  const password = this.apriori2.password + this.apriori2.password
  return await element.setValue(password);
})

When('I enter New Password apriori', async function(){
  let element = await this.driver.$('input[id="user-password-new"]');
  const password = this.apriori2.password + this.apriori2.password
  return await element.setValue(password);
})

When('I enter Verify Password apriori', async function(){
  let element = await this.driver.$('input[id="user-new-password-verification"]');
  const password = this.apriori2.password + this.apriori2.password
  return await element.setValue(password);
})