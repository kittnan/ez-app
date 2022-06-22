import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins.component';
import { UsersManageComponent } from './users-manage/users-manage.component';
import { UsersRegisterComponent } from './users-register/users-register.component';
import { UsersEditComponent } from './users-manage/users-edit/users-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AdminsComponent,
    children: [
      {
        path: 'register',
        component: UsersRegisterComponent,
      },
      {
        path: 'manage',
        component: UsersManageComponent,
      },
      {
        path: 'manage/edit',
        component: UsersEditComponent,
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
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
