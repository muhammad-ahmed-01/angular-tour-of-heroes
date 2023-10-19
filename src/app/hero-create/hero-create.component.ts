import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.css']
})
export class HeroCreateComponent {
  newHeroName: string = "";

  heroNames: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroNames = this.heroService.getHeroes();
  }

  updateHeroName(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.newHeroName = inputValue;
  }

  createHero() {
    this.heroService.createHero(this.newHeroName);
  }
}
