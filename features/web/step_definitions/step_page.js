const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const { faker } = require('@faker-js/faker');


When('I click Pages', async function(){
  let element = await this.driver.$('a[href="#/pages/"]');
  return await element.click();
})

When('I click New Page', async function(){
  let element = await this.driver.$('a[href="#/editor/page/"]');
  return await element.click();
})

When('I enter title {kraken-string}', async function(title){
  let element = await this.driver.$('textarea[placeholder="Page Title"]');
  return await element.setValue(title);
})

When('I enter title random title to the limit with faker', async function(){
  let element = await this.driver.$('textarea[placeholder="Page Title"]');
  let title = faker.lorem.slug(50)
  return await element.setValue(title);
})

When('I enter content {kraken-string}', async function(content){
  let element = await this.driver.$('div[data-placeholder="Begin writing your page..."]');
  return await element.setValue(content);
})

When('I click Publish Dropdown', async function(){
  let element = await this.driver.$('div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]');
  return await element.click();
})

When('I click Publish', async function(){
  let element = await this.driver.$('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]');
  return await element.click();
})

When('I click Pages Back', async function(){
  let element = await this.driver.$('a[href="#/pages/"]');
  return await element.click();
})

Then('I check the page is published with title {kraken-string}', async function(title){
  let elements = await this.driver.$$('h3[class="gh-content-entry-title"]')
  let isEqual = false;
  await Promise.all(elements.map(async (element) => {
    const text = await element.getText()
    if(text === title){
      isEqual = true;
    }
  }));
  expect(isEqual).to.equal(true)
})

When('I click page settings', async function(){
  let element = await this.driver.$('button[title="Settings"]');
  return await element.click();
})

When('I click page preview', async function(){
  let element = await this.driver.$('a[class="post-view-link"]');
  return await element.click();
})

Then('I check the page is previewed with title {kraken-string}', async function(title){
  let element = await this.driver.$('h1[class="post-full-title"]')
  let text = await element.getText()
  expect(text).to.equal(title)
})

Then('I check the page is previewed with content {kraken-string}', async function(content){
  let element = await this.driver.$('div[class="post-content"]')
  let text = await element.getText()
  expect(text).to.equal(content)
})

When('I click on the published page with title {kraken-string}', async function(title){
  let elements = await this.driver.$$('h3[class="gh-content-entry-title"]')
  let savedElement = undefined
  await Promise.all(elements.map(async (element) => {
    const text = await element.getText()
    if(text === title){
      savedElement = element
    }
  }));
  return await savedElement.click()
})

When('I click Update Dropdown', async function(){
  let element = await this.driver.$('div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]');
  return await element.click();
})

When('I click Update', async function(){
  let element = await this.driver.$('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]');
  return await element.click();
})

When('I scroll to delete button', async function(){

  const scroller = async (driverer) => {
    let element = await driverer.$('div[class="settings-menu-container"]')
    element.scroll(0, 500);
  }
  
  let result = await this.driver.execute(await scroller(this.driver));
  return await result
})

When('I click Delete page', async function(){
  let element = await this.driver.$('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]');
  return await element.click();
})

When('I click Confirm Delete page', async function(){
  let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
  return await element.click();
})

Then('I check the page is deleted with title {kraken-string}', async function(title){
  let elements = await this.driver.$$('h3[class="gh-content-entry-title"]')
  let found = false;
  await Promise.all(elements.map(async (element) => {
    const text = await element.getText()
    if(text === title){
      found = true;
    }
  }));
  expect(found).to.equal(false)
})

When('I enter title {kraken-string} V4.44', async function(title){
  let element = await this.driver.$('textarea[placeholder="Page title"]');
  return await element.setValue(title);
})

When('I click Publish Dropdown V4.44', async function(){
  let element = await this.driver.$('div[class="gh-publishmenu ember-view"]');
  return await element.click();
})

When('I click Publish V4.44', async function(){
  let element = await this.driver.$('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]');
  return await element.click();
})
