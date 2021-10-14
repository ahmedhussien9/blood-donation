import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { DoctorComponent, InputDialogPopup } from './doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';


@NgModule({
  declarations: [
    DoctorComponent,
    InputDialogPopup
    
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
  ]
})
export class DoctorModule { }
