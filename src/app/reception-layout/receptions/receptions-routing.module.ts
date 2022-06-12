import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerEditComponent } from './customers-manage/customer-edit/customer-edit.component';
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
        path: 'manage/edit',
        component: CustomerEditComponent,
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
