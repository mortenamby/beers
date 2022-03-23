import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, take, withLatestFrom } from 'rxjs/operators';
import { ApiService } from 'src/app/core/api/api.service';
import { BeerDTO } from 'src/app/core/api/beer-dto.interface';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss'],
})
export class BeersComponent implements OnInit {

  public readonly beers$: Observable<BeerDTO[]>;
  private readonly beersState = new BehaviorSubject<BeerDTO[]>([]);

  constructor(private apiService: ApiService, private cd: ChangeDetectorRef) {
    this.beers$ = this.beersState.asObservable();
  }

  public ngOnInit(): void {
    this.getBeers().subscribe(beers => {
      this.beersState.next(beers);
    });
  }

  public getBeers() {
    return this.apiService.getBeers()
  }

  public onAddBeer(beer: BeerDTO) {
    this.apiService.createBeer(beer).pipe(withLatestFrom(this.beers$)).subscribe(([beerDto, beers]) => {
      const randomBeerIndex = Math.floor(Math.random() * beers.length);
      const randomBeer = beers[randomBeerIndex];
      this.beersState.next([{...beerDto, image_url: randomBeer.image_url}, ...beers]);
    });
  }

  beerTrackByFn(index: number, beer: BeerDTO) {
    return beer.id;
  }

}
