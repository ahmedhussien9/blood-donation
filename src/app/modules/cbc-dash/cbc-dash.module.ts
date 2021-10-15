import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbcDashboardComponent } from './cbc-dash.component';
import { CbcDashboardRoutingModule } from './cbc-dash-routing.module';



@NgModule({
  declarations: [
   CbcDashboardComponent
  ],
  imports: [
    CommonModule,
   CbcDashboardRoutingModule
  ]
})
export class CbcDashboardModule { }
