const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I enter invite email apriori', async function(){
  let element = await this.driver.$('input[placeholder="Email Address"]');
  const email = this.apriori.email
  return await element.setValue(email);
})

Then('I check the invitation was sent to email apriori', async function(){
  let elements = await this.driver.$$('h3[class="apps-card-app-title"]')
  let isEqual = false;
  const email = this.apriori.email
  await Promise.all(elements.map(async (element) => {
    const text = await element.getText()
    if(text === email){
      isEqual = true;
    }
  }));
   expect(isEqual).to.equal(true)
})

When('I change Location to apriori', async function(){
  let element = await this.driver.$('input[id="user-location"]');
  const location = this.apriori.location
  return await element.setValue(location);
})

Then('I check Location is updated to apriori', async function(){
  let element = await this.driver.$('input[id="user-location"]');
  let text = await element.getValue();
  const location = this.apriori.location
  expect(text).to.equal(location)
})