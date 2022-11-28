const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const { faker } = require('@faker-js/faker');

When('I click Tags', async function(){
    let element = await this.driver.$('a[href="#/tags/"]');
    return await element.click();
  })

  When('I click Tags Back', async function(){
    let element = await this.driver.$('a[href="#/tags/"]');
    return await element.click();
  })
  
  Then('I check the tag is published with title {kraken-string}', async function(title){
    let elements = await this.driver.$$('h3[class="gh-tag-list-name"]')
    let isEqual = false;
    await Promise.all(elements.map(async (element) => {
      const text = await element.getText()
      if(text === title){
        isEqual = true;
      }
    }));
    expect(isEqual).to.equal(true)
  })
  

When('I click Tag {kraken-string}', async function(name){
  let element = await this.driver.$('a[href="#/tags/'+name+'/"]');
  return await element.click();
})

When('I click New Tags', async function(){
  let element = await this.driver.$('a[href="#/tags/new/"]');
  return await element.click();
})

When('I enter Tag Name {kraken-string}', async function(title){
    let element = await this.driver.$('input[id="tag-name"]');
    return await element.setValue(title);
  })

  When('I enter tag name random title to the limit with faker', async function(){
    let element = await this.driver.$('input[id="tag-name"]');
    let title = faker.lorem.slug(50)
    return await element.setValue(title);
  })

  When('I enter tag description random description to the limit with faker', async function(){
    let element = await this.driver.$('textarea[id="tag-description"]');
    let title = faker.lorem.slug(500)
    return await element.setValue(title);
  })

When('I enter Tag Description {kraken-string}', async function(title){
  let element = await this.driver.$('textarea[id="tag-description"]');
  return await element.setValue(title);
})

When('I click save for Tag', async function(){
  let element = await this.driver.$('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]');
  return await element.click();
})

When('I click delete for Tag', async function(){
  let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]');
  return await element.click();
})

When('I click delete 2 for Tag', async function(){
  let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
  return await element.click();
})

When('I click save for Tag V4.44', async function(){
  let element = await this.driver.$('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]');
  return await element.click();
})

When('I click delete for Tag V4.44', async function(){
  let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon"]');
  return await element.click();
})

When('I enter no tag name apriori', async function(){
  let element = await this.driver.$('input[id="tag-name"]');
  let title = faker.lorem.lines(0)
  return await element.setValue(title);
})

When('I enter no tag name random', async function(){
  let element = await this.driver.$('input[id="tag-name"]');
  const title = this.apriori.blank
  return await element.setValue(title);
})

Then('I check for empty error message in tags', async function(){
  let element = await this.driver.$('span[class="error"]');
  const text = await element.getText()
  expect(text).to.equal("You must specify a name for the tag.");
})

