import { Given, When, Then, Before } from "cucumber";
import { expect } from "chai";

import { DashboardPage } from '../pages/dashboard.po';

let dashboardPage;

Before(() => {
  dashboardPage = new DashboardPage();
});

Given('I go to the Dashboard page', async () => {
  await dashboardPage.navigateTo();
});

When('I type {string} in the search field', async (searchCriteria) => {
  await dashboardPage.searchFor(searchCriteria);
});

Then('I should see the {string} and {string} as search results', async (firstResult, secondResult) => {
  await expect(dashboardPage.getSearchResults()).to.eventually.deep.equal([firstResult, secondResult]);
});
