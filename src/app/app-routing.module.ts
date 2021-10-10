import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlayoutComponent } from './core/adminlayout/adminlayout.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./core/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dash',
    component: AdminlayoutComponent,
    children: [
      {
        path: 'queue',
        loadChildren: () =>
          import('./modules/queue/queue.module').then((m) => m.QueueModule),
        data: {
          allowedRoles: ['EXAM_APPLICANTS'],
        },
      },
      {
        path: 'campaigns',
        loadChildren: () =>
          import('./modules/campaigns/campaigns.module').then((m) => m.CampaignsModule),
        data: {
          allowedRoles: ['EXAM_APPLICANTS'],
        },
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/reports/reports-routing.module').then(
            (m) => m.ReportsRoutingModule
          ),
      },
      {
        path: 'home-reports',
        loadChildren: () =>
          import('./modules/reports-admin/reports-admin.module').then(
            (m) => m.ReportsAdminModule
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'prefix',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'dash',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
