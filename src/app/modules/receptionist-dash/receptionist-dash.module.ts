import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionistDashboardRoutingModule } from './receptionist-dash-routing.module';
import { ReceptionistDashboardComponent } from './receptionist-dash.component';


@NgModule({
  declarations: [
    ReceptionistDashboardComponent
  ],
  imports: [
    CommonModule,
    ReceptionistDashboardRoutingModule
  ]
})
export class ReceptionistDashboardModule { }
