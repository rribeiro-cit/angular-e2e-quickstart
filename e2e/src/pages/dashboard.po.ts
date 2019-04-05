import { browser, by, element } from 'protractor';

export class DashboardPage {

  private searchInput = element(by.css('#search-box'));
  private searchResults = element.all(by.css('.search-item'));

  navigateTo() {
    return browser.get('/dashboard');
  }

  searchFor(criteria: string) {
    return this.searchInput.sendKeys(criteria);
  }

  getSearchResults() {
    return this.searchResults.getText();
  }

  clickSearchResult(index: number) {
    return this.searchResults.get(index).click();
  }
}
