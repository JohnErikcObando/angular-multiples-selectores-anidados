import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SelectorPageComponent } from './selector-page/selector-page.component';
import { CountriesModule } from './countries.module';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'selector', component: SelectorPageComponent },
      { path: '**', redirectTo: 'selector' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutiesModule {}
