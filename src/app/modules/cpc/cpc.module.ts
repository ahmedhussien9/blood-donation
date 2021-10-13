import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { CpcComponent } from './cpc.component';
import { CpcRoutingModule } from './cpc-routing.module';
import { SignatureComponent } from './signature/signature.component';
import { SignaturePadModule } from 'angular2-signaturepad';


@NgModule({
  declarations: [
    CpcComponent,
    SignatureComponent,
    
  ],
  imports: [
    CommonModule,
    CpcRoutingModule,
    SharedModule,
    SignaturePadModule
  ]
})
export class CpcModule { }
