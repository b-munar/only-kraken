const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;


When('I click in menu Profile', async function(){
    let element = await this.driver.$('div[class="ember-view ember-basic-dropdown-trigger  flex items-center outline-0 pointer space-between pa2 pl4 pr3 mt3 mb6"]');
    return await element.click();
  })

  When('I click About Ghost', async function(){
    let element = await this.driver.$('a[href="#/about/"]');
    return await element.click();
  })


  When('I click Sign Out', async function(){
    let element = await this.driver.$('a[href="#/signout/"]');
    return await element.click();
  })

  When('I click in menu Profile V4.44', async function(){
    let element = await this.driver.$('div[class="gh-user-avatar relative"]');
    return await element.click();
  })

  When('I click in user Staff {kraken-string} V4.44', async function(name){
    let element = await this.driver.$('a[href="#/settings/staff/'+name+'/"]');
    return await element.click();
})

When('I click About Ghost V4.44', async function(){
  let element = await this.driver.$('a[href="#/whatsnew/"]');
  return await element.click();
})
