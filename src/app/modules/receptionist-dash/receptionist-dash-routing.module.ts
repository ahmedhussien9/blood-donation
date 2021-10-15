import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptionistDashboardComponent } from './receptionist-dash.component';

const routes: Routes = [
  {
    path: "",
    component: ReceptionistDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionistDashboardRoutingModule { }
