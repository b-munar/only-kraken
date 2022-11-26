const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I click Staff for Change Password', async function(){
    let element = await this.driver.$('a[href="#/staff/"]');
    return await element.click();
})

When('I click in user Staff {kraken-string}', async function(name){
    let element = await this.driver.$('a[href="#/staff/'+name+'/"]');
    return await element.click();
})

When('I enter Old Password {kraken-string}', async function(password){
    let element = await this.driver.$('input[id="user-password-old"]');
    return await element.setValue(password);
})

When('I enter New Password {kraken-string}', async function(password){
    let element = await this.driver.$('input[id="user-password-new"]');
    return await element.setValue(password);
})

When('I enter Verify Password {kraken-string}', async function(password){
    let element = await this.driver.$('input[id="user-new-password-verification"]');
    return await element.setValue(password);
})

When('I click Change Password', async function(){
    let element = await this.driver.$('button[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"]');
    return await element.click();
  })