import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhlebotomyDashboardComponent } from './phlebotomy-dash.component';

const routes: Routes = [
  {
    path: "",
    component: PhlebotomyDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhlebotomyDashboardRoutingModule { }
