import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';
import { BeerDTO } from 'src/app/core/api/beer-dto.interface';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeersComponent implements OnInit {

  public beers$ = this.getBeers();

  constructor(private apiService: ApiService) { }

  public ngOnInit(): void {
  }

  public getBeers() {
    return this.apiService.getBeers();
  }

  beerTrackByFn(index: number, beer: BeerDTO) {
    return beer.id;
  }

}
