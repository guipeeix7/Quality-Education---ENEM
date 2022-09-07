import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatesComponent } from './states.component';
import { StatesMapComponent } from './states-map/states-map.component';
import { StatesInformationComponent } from './states-information/states-information.component';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StatesComponent, StatesMapComponent, StatesInformationComponent],
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule
  ],
  exports:[
  ]
})
export class StatesModule { }
