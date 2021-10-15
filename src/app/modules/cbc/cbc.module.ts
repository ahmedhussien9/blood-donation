import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { CbcComponent } from './cbc.component';
import { CbcRoutingModule } from './cbc-routing.module';
import { SignatureComponent } from './signature/signature.component';
import { SignaturePadModule } from 'angular2-signaturepad';


@NgModule({
  declarations: [
    CbcComponent,
    SignatureComponent,
    
  ],
  imports: [
    CommonModule,
    CbcRoutingModule,
    SharedModule,
    SignaturePadModule
  ]
})
export class CbcModule { }
