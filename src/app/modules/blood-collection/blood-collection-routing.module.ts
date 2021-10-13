import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  BloodCollectionComponent } from './blood-collection.component';

const routes: Routes = [
  {
    path: '',
    component:  BloodCollectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class  BloodCollectionRoutingModule {}
