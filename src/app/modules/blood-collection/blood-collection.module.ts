import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { SignaturePadModule } from 'angular2-signaturepad';
import { BloodCollectionComponent } from './blood-collection.component';
import { BloodCollectionRoutingModule } from './blood-collection-routing.module';


@NgModule({
  declarations: [
    BloodCollectionComponent,
    
  ],
  imports: [
    CommonModule,
    BloodCollectionRoutingModule,
    SharedModule,
  ]
})
export class BloodCollectionModule { }
