import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a hero', () => {
    const intialLength = service.getNumberOfHeroes();
    service.createHero("new hero");
    expect(intialLength).toBeLessThan(service.getNumberOfHeroes());
  })
});
