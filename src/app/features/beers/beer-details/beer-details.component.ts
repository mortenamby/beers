import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerDetailsComponent implements OnInit {

  public beer$ = this.beerService.getBeerById(this.route.snapshot.paramMap.get('id'))

  constructor(private route: ActivatedRoute, private beerService: BeerService) { }

  ngOnInit(): void {
  }
}
