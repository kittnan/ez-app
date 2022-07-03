import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorHealComponent } from './doctor-heal/doctor-heal.component';
import { DoctorLayoutComponent } from './doctor-layout.component';
import { DoctorManageComponent } from './doctor-manage/doctor-manage.component';


const routes: Routes = [
  {
    path: '',
    component: DoctorLayoutComponent,
    children: [
      {
        path: 'manage',
        component: DoctorManageComponent,
      },
      {
        path: 'heal',
        component: DoctorHealComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'manage',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
