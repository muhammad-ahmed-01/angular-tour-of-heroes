import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent implements OnInit {

  heroNames: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroNames = this.heroService.getHeroes();
  }

  heroSearchQuery: string = '';

  filteredHeroes: Hero[] = [];

  searchHero() {
    this.filteredHeroes.splice(0, this.filteredHeroes.length);
    if (this.heroSearchQuery.length == 0){
      return;
    }

    console.warn('Searching for a hero');
    for (const hero of this.heroNames) {
      if (hero.name.toLowerCase().includes(this.heroSearchQuery.toLowerCase())) {
        this.filteredHeroes.push(hero);
        console.warn(
          `${hero} matches the search string "${this.heroSearchQuery}"`
        );
      }
    }
  }
}
