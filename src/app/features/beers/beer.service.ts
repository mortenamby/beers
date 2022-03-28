import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, take, map } from 'rxjs';
import { BeerDTO } from 'src/app/core/api/beer-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  public readonly beers$: Observable<BeerDTO[]>;
  private readonly beersState = new BehaviorSubject<BeerDTO[]>([]);
  constructor() {
    this.beers$ = this.beersState.asObservable();
  }

  public setBeers(beers: BeerDTO[]) {
    this.beersState.next(beers);
  }

  public addBeer(beer: BeerDTO) {
    this.beers$.pipe(take(1)).subscribe(beers => {
      const randomBeerIndex = Math.floor(Math.random() * beers.length);
      const randomBeer = beers[randomBeerIndex];
      this.beersState.next([{...beer, image_url: randomBeer.image_url}, ...beers]);
    })
  }

  public deleteBeer(beer: BeerDTO) {
    this.beers$.pipe(take(1)).subscribe(beers => {
      this.beersState.next(beers.filter(beerDto => beerDto.id !== beer.id))
    })
  }

  public updateBeer(beer: BeerDTO) {
    this.beers$.pipe(take(1)).subscribe(beers => {
      const beerIndex = beers.findIndex(beerDto => beerDto.id === beer.id);
      if (beerIndex > -1) {
        const oldBeer = beers[beerIndex];
        const newBeer = Object.assign(oldBeer, beer);
        beers.splice(beerIndex, 1, newBeer);
      }
      this.beersState.next([...beers]);
    })
  }

  public getBeerById(id: string | null) {
    return this.beers$.pipe(take(1), map(beers => id ? beers.find(beer => beer.id?.toString() === id.toString()) : undefined))
  }
}
