import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BeerDTO } from 'src/app/core/api/beer-dto.interface';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss']
})
export class BeerDetailsComponent implements OnInit {

  public beer$ = this.beerService.getBeerById(this.route.snapshot.paramMap.get('id'))

  constructor(private route: ActivatedRoute, private beerService: BeerService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
  }
}
