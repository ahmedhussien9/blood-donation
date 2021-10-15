import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhlebotomyDashboardRoutingModule } from './phlebotomy-dash-routing.module';
import { PhlebotomyDashboardComponent } from './phlebotomy-dash.component';



@NgModule({
  declarations: [
   PhlebotomyDashboardComponent
  ],
  imports: [
    CommonModule,
   PhlebotomyDashboardRoutingModule
  ]
})
export class PhlebotomyDashboardModule { }
