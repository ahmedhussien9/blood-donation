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
          allowedRoles: ['queue'],
        },
      },
      {
        path: 'campaigns',
        loadChildren: () =>
          import('./modules/campaigns/campaigns.module').then((m) => m.CampaignsModule),
        data: {
          allowedRoles: ['EXAM_APPLICANTS'],
        }},
        

        {
          path: "cpc",
          loadChildren: () => import("./modules/cpc/cpc.module").then((m) => m.CpcModule),
          data: {
            // allowedRoles: ['EXAM_APPLICANTS'],
          },
        },
        {
        path: "doctor",
        loadChildren: () => import("./modules/doctor/doctor.module").then((m) => m.DoctorModule),
        data: {
          // allowedRoles: ['EXAM_APPLICANTS'],
        },
      },
      {
        path: "announcements",
        loadChildren: () => import("./modules/doctorAnnouncements/doctorAnnouncements.module").then((m) => m.doctorAnnouncementsModule),
        data: {
          // allowedRoles: ['EXAM_APPLICANTS'],
        },
      },
      {
        path: "blood-collection",
        loadChildren: () => import("./modules/blood-collection/blood-collection.module").then((m) => m.BloodCollectionModule),
        data: {
          // allowedRoles: ['EXAM_APPLICANTS'],
        },
      },
       {
        path: "phlebotomy-dashboard",
        loadChildren: () => import("./modules/phlebotomy-dashboard/phlebotomy-dashboard.module").then((m) => m.PhlebotomyDashboardModule),
        data: {
          // allowedRoles: ['EXAM_APPLICANTS'],
        },
      },
      {
        path: "home",
        loadChildren: () => import("./modules/reports/reports-routing.module").then(
          (m) => m.ReportsRoutingModule
        ),
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
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
