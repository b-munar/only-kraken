const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I click Staff', async function(){
  let element = await this.driver.$('a[href="#/staff/"]');
  return await element.click();
})

When('I click Invite people', async function(){
  let element = await this.driver.$('button[class="gh-btn gh-btn-green"]');
  return await element.click();
})

When('I enter invite email {kraken-string}', async function(email){
  let element = await this.driver.$('input[placeholder="Email Address"]');
  return await element.setValue(email);
})

When('I click Send invitation', async function(){
  let element = await this.driver.$('button[class="gh-btn gh-btn-green gh-btn-icon ember-view"]');
  return await element.click();
})

Then('I reload Staff page', async function(){
  return await this.driver.refresh();
})

Then('I check the invitation was sent to email {kraken-string}', async function(email){
  let elements = await this.driver.$$('h3[class="apps-card-app-title"]')
  let isEqual = false;
  await Promise.all(elements.map(async (element) => {
    const text = await element.getText()
    if(text === email){
      isEqual = true;
    }
  }));
//   expect(isEqual).to.equal(true)
})

When('I click revoke invitation', async function(){
  let element = await this.driver.$('a[class="apps-configured-action red-hover"]')
  return await element.click()
})

Then('I check the invitation was revoked for email {kraken-string}', async function(email){
  let elements = await this.driver.$$('h3[class="apps-card-app-title"]')
  let isEqual = false;
  await Promise.all(elements.map(async (element) => {
    const text = await element.getText()
    if(text === email){
      isEqual = true;
    }
  }));
  expect(isEqual).to.equal(false)
})

When('I click on Owner', async function(){
  let element = await this.driver.$('span[class="gh-badge owner"]')
  return await element.click()
})

When('I change Full name to {kraken-string}', async function(name){
  let element = await this.driver.$('input[placeholder="Full Name"]');
  return await element.setValue(name);
})

When('I change Slug to {kraken-string}', async function(slug){
  let element = await this.driver.$('input[placeholder="Slug"]');
  return await element.setValue(slug);
})

When('I change Location to {kraken-string}', async function(location){
  let element = await this.driver.$('input[id="user-location"]');
  return await element.setValue(location);
})

When('I click Owner Save', async function(){
  let element = await this.driver.$('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]')
  return await element.click()
})

Then('I check Full name is updated to {kraken-string}', async function(name){
  let element = await this.driver.$('input[placeholder="Full Name"]');
  let text = await element.getValue();
  expect(text).to.equal(name)
})

Then('I check Slug is updated to {kraken-string}', async function(slug){
  let element = await this.driver.$('input[placeholder="Slug"]');
  let text = await element.getValue();
  expect(text).to.equal(slug)
})

Then('I check Location is updated to {kraken-string}', async function(location){
  let element = await this.driver.$('input[id="user-location"]');
  let text = await element.getValue();
  expect(text).to.equal(location)
})

Then('I check there is an error response', async function(){
  let element = await this.driver.$('p[class="response"]');
  let text = await element.getText();
  expect(text).to.equal('A user with that email address was already invited.')
})

Then('I click on exit invite', async function(){
  let element = await this.driver.$('a[class="close"]');
  return await element.click()
})

Then('I check there is only one invitation for email {kraken-string}', async function(email){
  let elements = await this.driver.$$('h3[class="apps-card-app-title"]')
  let count = 0;
  await Promise.all(elements.map(async (element) => {
    const text = await element.getText()
    if(text === email){
      count++;
    }
  }));
  expect(count).to.equal(1)
})

When('I click Settings V4.44', async function(){
  let element = await this.driver.$('a[href="#/settings/"]');
  return await element.click();
})

When('I click Staff V4.44', async function(){
  let element = await this.driver.$('a[href="#/settings/staff/"]');
  return await element.click();
})

When('I click Invite people V4.44', async function(){
  let element = await this.driver.$('button[class="gh-btn gh-btn-primary"]');
  return await element.click();
})

When('I enter invite email {kraken-string} V4.44', async function(email){
  let element = await this.driver.$('input[name="email"]');
  return await element.setValue(email);
})

When('I click Send invitation V4.44', async function(){
  let element = await this.driver.$('button[class="gh-btn gh-btn-black gh-btn-icon ember-view"]');
  return await element.click();
})