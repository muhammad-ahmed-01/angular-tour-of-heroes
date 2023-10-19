import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  heroNames: Hero[] = [
    { id: 1, name: 'Superman' },
    { id: 2, name: 'Batman' },
    { id: 3, name: 'Wonder Woman' },
    { id: 4, name: 'Spider-Man' },
    { id: 5, name: 'Iron Man' }
  ];

  getHeroes() {
    return this.heroNames;
  }

  getHeroById(id: number) : Hero | undefined {
    return this.heroNames.find((hero) => hero.id === id);
  }

  createHero(heroName: string) {
    const highestId = Math.max(...this.heroNames.map(hero => hero.id), 0);    
    this.heroNames.push({id: highestId + 1, name: heroName});
  }

  updateHero(id: number, heroName: string) {
    const targetHero = this.getHeroById(id);
    if (targetHero){
      for (let hero of this.heroNames) {
        if (hero.id === id) {
          hero.name = heroName;
        }
      }
    }
  }

  deleteHero(id: number) {
    const updatedHeroNames = this.heroNames.filter((hero) => hero.id !== id);
    this.heroNames.length = 0;
    this.heroNames.push(...updatedHeroNames);
  }

  getNumberOfHeroes() {
    return this.heroNames.length;
  }
}
