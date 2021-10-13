import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  CpcComponent } from './cpc.component';

const routes: Routes = [
  {
    path: '',
    component:  CpcComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class  CpcRoutingModule {}
