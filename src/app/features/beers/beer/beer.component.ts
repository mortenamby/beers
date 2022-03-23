import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BeerDTO } from 'src/app/core/api/beer-dto.interface';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerComponent implements OnInit {
  @Input() beer: BeerDTO | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
