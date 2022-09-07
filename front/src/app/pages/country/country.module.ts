import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { CountryMapComponent } from './country-map/country-map.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CountryComponent, CountryMapComponent, CountryInfoComponent],
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule
  ]
})
export class CountryModule { }
