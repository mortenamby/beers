import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'beers',
    loadChildren: () => import('./features/beers/beers.module').then((m) => m.BeersModule),
  },
  { path: '', redirectTo: '/beers', pathMatch: 'full' },
  { path: '**', redirectTo: '/beers', pathMatch: 'full' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
