import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BeerDTO } from 'src/app/core/api/beer-dto.interface';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerComponent implements OnInit {
  @Output() beerDelete = new EventEmitter<BeerDTO>();
  @Output() beerEdit = new EventEmitter<BeerDTO>();
  @Input() beer: BeerDTO | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public onDelete() {
    this.beerDelete.emit(this.beer);
  }

  public onEdit() {
    this.beerEdit.emit(this.beer);
  }
}
