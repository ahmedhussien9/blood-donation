import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { GenerateBarcodeDialogComponent } from './components/generate-barcode-dialog/generate-barcode-dialog.component';
import { DoctorComponent } from './doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { InfoTableComponent } from 'src/app/shared/components/infoTable/infoTable.component';


@NgModule({
  declarations: [
    DoctorComponent,
    GenerateBarcodeDialogComponent,
    InfoTableComponent,
    
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
  ]
})
export class DoctorModule { }
