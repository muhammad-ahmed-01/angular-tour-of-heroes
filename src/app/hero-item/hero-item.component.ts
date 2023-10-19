import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute, Router, RouterConfigurationFeature } from '@angular/router';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {
  @Input ()
  hero!: Hero;

  @Input ()
  showRemoveBtn: boolean = true;

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    const foundHero = this.heroService.getHeroById(this.hero.id);
    if (foundHero){
      this.hero = foundHero;
    }
  }

  fetchHeroDetails() {
    console.warn("navigating to hero with id: ", this.hero.id);
    this.router.navigate(["/heroes", this.hero.id]);
  }

  deleteHero(id: number, event: Event) {
    event.stopPropagation();
    this.heroService.deleteHero(id);
  }

}
