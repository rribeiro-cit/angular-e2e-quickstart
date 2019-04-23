import { SettingsPage } from './pages/settings.po';
import { browser } from 'protractor';

describe('Dashboard page', () => {
  let settingsPage: SettingsPage;

  beforeEach(() => {
    settingsPage = new SettingsPage();
    browser.ignoreSynchronization = true;
  });

  // it('should display matching search results', () => {
  //   dashboardPage.navigateTo();
  //   dashboardPage.searchFor('man');
  //   browser.sleep(1000);
  //
  //   expect(dashboardPage.getSearchResults()).toEqual([
  //     {index: 0, text: 'Iron Man'},
  //     {index: 1, text: 'Spider-Man'},
  //   ]);
  // });

  it('should navigate from search result to hero details', () => {
    // TODO: Test Implementation

    // expect(heroDetailPage.getHeaderText()).toBe('IRON MAN Details');
  });
});
