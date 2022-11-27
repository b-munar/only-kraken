const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I enter Post Title apriori', async function(){
  let element = await this.driver.$('textarea[placeholder="Post Title"]');
  const title = this.apriori.title
  return await element.setValue(title);
})

When('I enter Post content apriori', async function(){
  let element = await this.driver.$('div[data-placeholder="Begin writing your post..."]');
  const content = this.apriori.content
  return await element.setValue(content);
})

Then('I check the post is published with title apriori', async function(){
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

When('I enter post title random title to the limit apriori', async function(){
  let element = await this.driver.$('textarea[placeholder="Post Title"]');
  let title = this.apriori.sentence_big
  return await element.setValue(title);
})