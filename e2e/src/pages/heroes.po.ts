import { browser, by, element, ElementArrayFinder } from 'protractor';

export class HeroesPage {

  private heroes = element.all(by.css('.heroes li'));

  navigateTo() {
    return browser.get('/heroes');
  }

  numberOfHeroes() {
    return this.heroes.count();
  }
}
