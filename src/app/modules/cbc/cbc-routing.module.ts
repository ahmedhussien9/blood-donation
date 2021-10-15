import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  CbcComponent } from './cbc.component';

const routes: Routes = [
  {
    path: '',
    component:  CbcComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class  CbcRoutingModule {}
