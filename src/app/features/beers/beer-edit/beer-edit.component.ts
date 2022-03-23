import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/api/api.service';
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

  public beerForm = new FormGroup({
    name: new FormControl('Test Beer', { validators: [Validators.required]}),
    description: new FormControl('This is a test', { validators: [Validators.required]}),
    contributed_by: new FormControl('Morten', { validators: [Validators.required]}),
    ibu: new FormControl(12),
    ebc: new FormControl(21)
  })
  constructor(private apiService: ApiService) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['beer'] && changes['beer'].currentValue) {
      this.beerForm.patchValue(changes['beer'].currentValue)
    }
  }

  public onSubmitBeer() {
    if (this.beerForm.invalid) {
      return;
    }
    this.addBeer.emit(this.beerForm.value);
  }
}
