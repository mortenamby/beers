import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeersComponent } from './beers.component';

const routes: Routes = [
  {
    path: '',
    component: BeersComponent,
  },
  {
    path: ':id',
    component: BeerDetailsComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeersRoutingModule {}
