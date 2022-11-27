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

When('I enter tag description random description to the limit apriori', async function(){
  let element = await this.driver.$('textarea[id="tag-description"]');
  let title = this.apriori.sentence_big
  return await element.setValue(title);
})

When('I enter tag name random title to the limit apriori', async function(){
  let element = await this.driver.$('input[id="tag-name"]');
  let title = this.apriori.sentence_big
  return await element.setValue(title);
})

Then('I check for error message in tags', async function(){
  let element = await this.driver.$('span[class="error"]');
  const text = await element.getText()
  expect(text).to.equal("Tag names cannot be longer than 191 characters.");
})

Then('I check for error message description', async function(){
  let element = await this.driver.$('div[class="form-group error ember-view"]');
  const text = await element.getText()
  expect(text).to.have.string("Description cannot be longer than 500 characters.");
})

When('I enter Tag Name apriori2', async function(){
  let element = await this.driver.$('input[id="tag-name"]');
  const title = this.apriori2.title
  return await element.setValue(title);
})

When('I enter Tag Description apriori2', async function(){
  let element = await this.driver.$('textarea[id="tag-description"]');
  const description = this.apriori2.content
  return await element.setValue(description);
})

Then('I check the tag is published with title apriori2', async function(){
  let elements = await this.driver.$$('h3[class="gh-tag-list-name"]')
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

When('I click Tag apriori', async function(){
  const title = this.apriori.title
  const url = String(title).replace(' ', '-').toLowerCase()
  let element = await this.driver.$('a[href="#/tags/'+url+'/"]');
  return await element.click();
})