import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { DonorDetailsComponent, PhlebotomyDashboardComponent } from './phlebotomy-dashboard.component';
import { PhlebotomyDashboardRoutingModule } from './phlebotomy-dashboard-routing.module';


@NgModule({
  declarations: [
    PhlebotomyDashboardComponent,
    DonorDetailsComponent
    
  ],
  imports: [
    CommonModule,
    PhlebotomyDashboardRoutingModule,
    SharedModule,
  ]
})
export class PhlebotomyDashboardModule { }
