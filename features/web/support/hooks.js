const { After, Before, AfterStep } = require("@cucumber/cucumber");
const { WebClient } = require("kraken-node");
const fs  = require("fs")
const dataApriori = require('../../../MOCK_DATA.json')

Before(async function () {
  this.deviceClient = new WebClient("chrome", {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
  const randomNumber = Math.floor(Math.random() * 499)
  this.apriori = dataApriori[randomNumber]
  this.apriori2 = dataApriori[randomNumber + 1]
});

After(async function () {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});

AfterStep(async function (scenario) {
  if (!fs.existsSync('./screenshots')) {
    fs.mkdirSync('./screenshots', { recursive: true });
  }
  const path = scenario.gherkinDocument.feature.name.replace(/\s/g, "_");
  if (!fs.existsSync('./screenshots/'+path)) {
    fs.mkdirSync('./screenshots/'+path, { recursive: true });
  }
  await this.driver.saveScreenshot(
      './screenshots/'+path+'/'+
      path +
      Math.round(+new Date() / 100) +
      ".png"
  );
})
