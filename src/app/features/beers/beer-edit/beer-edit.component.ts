import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BeerDTO } from 'src/app/core/api/beer-dto.interface';

@Component({
  selector: 'app-beer-edit',
  templateUrl: './beer-edit.component.html',
  styleUrls: ['./beer-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerEditComponent implements OnChanges {
  @Input() beer: BeerDTO | undefined;
  @Output() addBeer = new EventEmitter<BeerDTO>();
  @Output() updateBeer = new EventEmitter<BeerDTO>();

  public beerForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('Test Beer', { validators: [Validators.required]}),
    description: new FormControl('This is a test', { validators: [Validators.required]}),
    contributed_by: new FormControl('Morten', { validators: [Validators.required]}),
    ibu: new FormControl(12),
    ebc: new FormControl(21)
  })
  constructor() { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['beer'] && changes['beer'].currentValue) {
      this.beerForm.patchValue(changes['beer'].currentValue)
    }
  }

  public onSubmitBeer() {
    if (this.beerForm.invalid) {
      return;
    }
    const beer = this.beerForm.value;
    beer.id ? this.updateBeer.emit(beer) : this.addBeer.emit(beer);
  }
}
