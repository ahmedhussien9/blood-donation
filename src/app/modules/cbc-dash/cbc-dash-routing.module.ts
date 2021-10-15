import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CbcDashboardComponent } from './cbc-dash.component';

const routes: Routes = [
  {
    path: "",
    component: CbcDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CbcDashboardRoutingModule { }
