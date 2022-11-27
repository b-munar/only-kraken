const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I enter Tag Name apriori', async function(){
  let element = await this.driver.$('input[id="tag-name"]');
  const title = this.apriori.title
  return await element.setValue(title);
})

When('I enter Tag Description apriori', async function(){
  let element = await this.driver.$('textarea[id="tag-description"]');
  const description = this.apriori.content
  return await element.setValue(description);
})

Then('I check the tag is published with title apriori', async function(){
  let elements = await this.driver.$$('h3[class="gh-tag-list-name"]')
  let isEqual = false;
  const title = this.apriori.title
  await Promise.all(elements.map(async (element) => {
    const text = await element.getText()
    if(text === title){
      isEqual = true;
    }
  }));
  expect(isEqual).to.equal(true)
})