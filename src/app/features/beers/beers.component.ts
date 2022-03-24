import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, take, withLatestFrom } from 'rxjs/operators';
import { ApiService } from 'src/app/core/api/api.service';
import { BeerDTO } from 'src/app/core/api/beer-dto.interface';
import { BeerService } from './beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeersComponent implements OnInit {

  public selectedBeerForEdit: BeerDTO = this.emptyBeer;

  public readonly beers$ = this.beerService.beers$

  constructor(private apiService: ApiService, private beerService: BeerService) {
  }

  public ngOnInit(): void {
    this.getBeers().subscribe(beers => {
      this.beerService.setBeers(beers);
    });
  }

  public getBeers() {
    return this.apiService.getBeers()
  }

  public onEditBeer(beer: BeerDTO) {
    this.selectedBeerForEdit = beer;
  }

  public onAddBeer(beer: BeerDTO) {
    this.apiService.createBeer(beer).subscribe(beerDto => {
      this.beerService.addBeer(beerDto);
    });
  }

  public onUpdateBeer(beer: BeerDTO) {
    this.apiService.updateBeer(beer).subscribe(beerDto => {
      this.beerService.updateBeer(beerDto);
      this.selectedBeerForEdit = this.emptyBeer;
    });
  }

  public onDeleteBeer(beer: BeerDTO) {
    this.apiService.deleteBeer(beer).subscribe(() => {
      this.beerService.deleteBeer(beer)
    });
  }

  public beerTrackByFn(index: number, beer: BeerDTO) {
    return beer.id + beer.name;
  }

  private get emptyBeer() {
    return {
      name: '',
      contributed_by: '',
      ebc: 0,
      ibu: 0,
      description: ''
    } as BeerDTO
  }
}
