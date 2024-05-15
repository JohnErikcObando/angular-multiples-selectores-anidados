import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorPageComponent } from './selector-page/selector-page.component';
import { CountriesRoutiesModule } from './countries-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectorPageComponent],
  imports: [CommonModule, CountriesRoutiesModule, ReactiveFormsModule],
})
export class CountriesModule {}
