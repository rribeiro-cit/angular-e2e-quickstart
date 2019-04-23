import { Given, When, Then, Before } from "cucumber";
import { expect } from "chai";

import { SettingsPage } from '../pages/settings.po';

let settingsPage;

Before(() => {
  settingsPage = new SettingsPage();
});

Given('I go to the Sumo login page', async () => {
  await settingsPage.navigateTo();
});

When('I click to login', async () => {
  await settingsPage.clickLogin();
});

When('I fill the username with {string}', async (username) => {
  await settingsPage.fillUsername(username);
});

When('I fill the password with {string}', async (pswd) => {
  await settingsPage.fillPassword(pswd);
});

Then('I should see first page of SUMO', async () => {
  // await expect(dashboardPage.getSearchResults()).to.eventually.deep.equal([firstResult, secondResult]); 
  // this to be an assert when its waiting the answer from a promise
});
