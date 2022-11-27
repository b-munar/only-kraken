const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I enter title apriori', async function(){
  let element = await this.driver.$('textarea[placeholder="Page Title"]');
  const title = this.apriori.title;
  return await element.setValue(title);
})

When('I enter title apriori2', async function(){
  let element = await this.driver.$('textarea[placeholder="Page Title"]');
  const title = this.apriori2.title;
  return await element.setValue(title);
})


When('I enter content apriori', async function(){
  let element = await this.driver.$('div[data-placeholder="Begin writing your page..."]');
  const content = this.apriori.content;
  return await element.setValue(content);
})

Then('I check the page is published with title apriori', async function(){
  let elements = await this.driver.$$('h3[class="gh-content-entry-title"]')
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

Then('I check the page is published with title apriori2', async function(){
  let elements = await this.driver.$$('h3[class="gh-content-entry-title"]')
  let isEqual = false;
  const title = this.apriori2.title
  await Promise.all(elements.map(async (element) => {
    const text = await element.getText()
    if(text === title){
      isEqual = true;
    }
  }));
  expect(isEqual).to.equal(true)
})

When('I enter title random title to the limit apriori', async function(){
  let element = await this.driver.$('textarea[placeholder="Page Title"]');
  let title = this.apriori.sentence_big
  return await element.setValue(title);
})

When('I click on the published page with title apriori', async function(){
  let elements = await this.driver.$$('h3[class="gh-content-entry-title"]')
  let savedElement = undefined
  const title = this.apriori.title
  await Promise.all(elements.map(async (element) => {
    const text = await element.getText()
    if(text === title){
      savedElement = element
    }
  }));
  return await savedElement.click()
})

When('I click Publish Dropdown apriori', async function(){
  try{
  let element = await this.driver.$('div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]');
  return await element.click();
  }catch(err){
    return true
  }
})