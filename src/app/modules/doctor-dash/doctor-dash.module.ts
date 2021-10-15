import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorDashboardRoutingModule } from './doctor-dash-routing.module';
import { DoctorDashboardComponent } from './doctor-dash.component';


@NgModule({
  declarations: [
    DoctorDashboardComponent
  ],
  imports: [
    CommonModule,
    DoctorDashboardRoutingModule
  ]
})
export class DoctorDashboardModule { }
