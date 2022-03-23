import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeersComponent } from './beers.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerComponent } from './beer/beer.component';
import { BeerEditComponent } from './beer-edit/beer-edit.component';



@NgModule({
  declarations: [
    BeersComponent,
    BeerDetailsComponent,
    BeerComponent,
    BeerEditComponent
  ],
  exports: [
    BeersComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class BeersModule { }
