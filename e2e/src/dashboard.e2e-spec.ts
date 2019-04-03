import { DashboardPage } from './pages/dashboard.po';
import { browser, logging } from 'protractor';
import { HeroDetailPage } from './pages/hero-detail.po';

describe('Dashboard page', () => {
  let dashboardPage: DashboardPage;
  let heroDetailPage: HeroDetailPage;

  beforeEach(() => {
    dashboardPage = new DashboardPage();
    heroDetailPage = new HeroDetailPage();
  });

  it('should display matching search results', () => {
    dashboardPage.navigateTo();
    dashboardPage.searchFor('man');
    browser.sleep(1000);

    expect(dashboardPage.getSearchResults()).toEqual([
      {index: 0, text: 'Iron Man'},
      {index: 1, text: 'Spider-Man'},
    ]);
  });

  it('should navigate from search result to hero details', () => {
    // TODO: Test Implementation

    expect(heroDetailPage.getHeaderText()).toBe('IRON MAN Details');
  });
});
