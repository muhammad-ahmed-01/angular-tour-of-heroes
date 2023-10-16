import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent {
  heroNames: string[] = [
    'Superman',
    'Batman',
    'Wonder Woman',
    'Spider-Man',
    'Iron Man',
  ];
  heroSearchQuery: string = '';

  filteredHeroes: string[] = [];

  searchHero() {
    console.log('Searching for a hero');
    for (const hero of this.heroNames) {
      if (hero.toLowerCase().includes(this.heroSearchQuery.toLowerCase())) {
        this.filteredHeroes.push(hero);
        console.log(
          `${hero} matches the search string "${this.heroSearchQuery}"`
        );
      }
    }
  }
}
