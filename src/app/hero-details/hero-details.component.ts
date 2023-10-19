import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero = {} as Hero;

  heroId: number = 0;
  updatedHeroName: string = "";

  constructor(private heroService: HeroService, private router: Router, route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.heroId = parseInt(params["id"], 10);
    });
  }

  ngOnInit(): void {
    const foundHero = this.heroService.getHeroById(this.heroId);
    if (foundHero){
      this.hero = foundHero;
    }
    this.updatedHeroName = this.hero.name;
  }

  updateHeroName(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.updatedHeroName = inputValue;
  }

  backToHeroesList() {
    this.router.navigate(["/heroes"]);
  }

  updateHero() {
    this.heroService.updateHero(this.hero.id, this.updatedHeroName);
  }
}
