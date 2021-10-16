import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhlebotomyDashboardRoutingModule } from './phlebotomy-dash-routing.module';
import { DonorDetailsComponent, PhlebotomyDashboardComponent } from './phlebotomy-dash.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
   PhlebotomyDashboardComponent,
   DonorDetailsComponent
  ],
  imports: [
    CommonModule,
   PhlebotomyDashboardRoutingModule,
   SharedModule
  ]
})
export class PhlebotomyDashboardModule { }
