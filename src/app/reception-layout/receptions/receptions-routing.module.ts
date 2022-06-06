import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersManageComponent } from './customers-manage/customers-manage.component';
import { CustomersRegisterComponent } from './customers-register/customers-register.component';
import { ReceptionsComponent } from './receptions.component';

const routes: Routes = [
  {
    path: '',
    component: ReceptionsComponent,
    children: [
      {
        path: 'register',
        component: CustomersRegisterComponent,
      },
      {
        path: 'manage',
        component: CustomersManageComponent,
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
export class ReceptionsRoutingModule {}
