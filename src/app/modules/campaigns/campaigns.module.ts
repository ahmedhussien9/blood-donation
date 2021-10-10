import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignsRoutingModule } from './campaigns-routing.module';
import { CampaignsComponent } from './campaigns.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CampaignsComponent
  ],
  imports: [
    CommonModule,
    CampaignsRoutingModule,
    SharedModule
  ]
})
export class CampaignsModule { }
