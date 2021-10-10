import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueueRoutingModule } from './queue-routing.module';
import { QueueComponent } from './queue.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GenerateBarcodeDialogComponent } from './components/generate-barcode-dialog/generate-barcode-dialog.component';


@NgModule({
  declarations: [
    QueueComponent,
    GenerateBarcodeDialogComponent
  ],
  imports: [
    CommonModule,
    QueueRoutingModule,
    SharedModule
  ]
})
export class QueueModule { }
