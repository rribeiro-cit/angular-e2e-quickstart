import { HeroesPage } from "./pages/heroes.po";
import { browser, protractor, element, by } from 'protractor';
import { HeroDetailPage } from './pages/hero-detail.po';

describe('Heroes page', () => {

  let heroesPage: HeroesPage;
  let heroDetailPage: HeroDetailPage;

  beforeEach(() => {
    heroesPage = new HeroesPage();
    heroDetailPage = new HeroDetailPage();
  });

  it('should add and remove heroes', () => {

    // TODO: Test Implementation

    expect(heroesPage.numberOfHeroes()).toBe(10);

    // TODO: Test Implementation

    expect(heroesPage.numberOfHeroes()).toBe(11);

    // TODO: Test Implementation
    
    expect(heroesPage.numberOfHeroes()).toBe(10);
  });

  it('should navigate from hero list to hero details', () => {
    // TODO: Test Implementation
    
    expect(heroDetailPage.getHeaderText()).toBe('BLACK PANTHER Details');
  });
});
