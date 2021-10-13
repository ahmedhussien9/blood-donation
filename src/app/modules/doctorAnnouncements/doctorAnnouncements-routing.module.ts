import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorAnnouncementsComponent } from './doctorAnnouncements.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorAnnouncementsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class doctorAnnouncementsRoutingModule {}
