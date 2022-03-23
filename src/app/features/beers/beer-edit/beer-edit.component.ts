import { Component, Input, OnInit } from '@angular/core';
import { BeerDTO } from 'src/app/core/api/beer-dto.interface';

@Component({
  selector: 'app-beer-edit',
  templateUrl: './beer-edit.component.html',
  styleUrls: ['./beer-edit.component.scss']
})
export class BeerEditComponent implements OnInit {
  @Input() beer: BeerDTO | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
