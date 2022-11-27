const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const { faker } = require('@faker-js/faker');


When('I click Post', async function(){
    let element = await this.driver.$('a[href="#/posts/"]');
    return await element.click();
  })


When('I click New Post', async function(){
  let element = await this.driver.$('a[href="#/editor/post/"]');
  return await element.click();
})

When('I enter Post Title {kraken-string}', async function(title){
    let element = await this.driver.$('textarea[placeholder="Post Title"]');
    return await element.setValue(title);
  })

When('I enter post title random title to the limit with faker', async function(){
  let element = await this.driver.$('textarea[placeholder="Post Title"]');
  let title = faker.lorem.slug(50)
  return await element.setValue(title);
})

When('I enter Post content {kraken-string}', async function(content){
  let element = await this.driver.$('div[data-placeholder="Begin writing your post..."]');
  return await element.setValue(content);
})

When('I click settings Dropdown in Post', async function(){
  let element = await this.driver.$('button[class="post-settings"]');
  return await element.click();
})

When('I click delete Post', async function(){
  let element = await this.driver.$('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]');
  return await element.click();
})

When('I click delete Post 2', async function(){
  let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
  return await element.click();
})

When('I click Publish Dropdown in Post', async function(){
  let element = await this.driver.$('div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]');
  return await element.click();
})

When('I click change time publish Post', async function(){
  let element = await this.driver.$('div[class="gh-publishmenu-radio "]');
  return await element.click();
})

When('I click change time publish Post 2', async function(){
  let element = await this.driver.$('div[class="gh-publishmenu-radio active"]');
  return await element.click();
})


When('I click Publish in Post', async function(){
  let element = await this.driver.$('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]');
  return await element.click();
})

When('I click Post Back', async function(){
  let element = await this.driver.$('a[href="#/posts/"]');
  return await element.click();
})

Then('I check the post is published with title {kraken-string}', async function(title){
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

When('I click any Post', async function(){
  let element = await this.driver.$('a[class="ember-view permalink gh-list-data gh-post-list-title"]');
  return await element.click();
})

When('I enter Post Title {string} V4.44', async function(title){
    let element = await this.driver.$('textarea[placeholder="Post title"]');
    return await element.setValue(title);
  })

When('I click Publish Dropdown in Post V4.44', async function(){
    let element = await this.driver.$('div[class="gh-publishmenu ember-view"]');
    return await element.click();
  })

When('I click Publish in Post V4.44', async function(){
    let element = await this.driver.$('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]');
    return await element.click();
  })

Then('I click confirm Publish V4.44', async function(){
    let element = await this.driver.$('button[class="gh-btn gh-btn-black gh-btn-icon ember-view"]');
    return await element.click();
  })

  
  