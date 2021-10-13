import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { DoctorAnnouncementsComponent } from './doctorAnnouncements.component';
import { doctorAnnouncementsRoutingModule } from './doctorAnnouncements-routing.module';
import { CampaignsComponent } from '../campaigns/campaigns.component';
import { InfoTableComponent } from 'src/app/shared/components/infoTable/infoTable.component';


@NgModule({
  declarations: [
   
    DoctorAnnouncementsComponent,
  
    
  ],
  imports: [
    CommonModule,
    doctorAnnouncementsRoutingModule,
    SharedModule,
  ]
})
export class doctorAnnouncementsModule { }
