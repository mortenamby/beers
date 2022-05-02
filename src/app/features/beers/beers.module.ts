import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeersComponent } from './beers.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerComponent } from './beer/beer.component';
import { BeerEditComponent } from './beer-edit/beer-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BeersRoutingModule } from './beers-routing.module';
import { CardModule } from '../card/card.module';
import { CardListModule } from '../card-list/card-list.module';



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
    CommonModule,
    ReactiveFormsModule,
    BeersRoutingModule,
    CardModule,
    CardListModule
  ]
})
export class BeersModule { }
