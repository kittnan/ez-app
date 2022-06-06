import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReceptionsRoutingModule } from './receptions-routing.module';
import { ReceptionsComponent } from './receptions.component';
import { HeaderReceptionComponent } from './header-reception/header-reception.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { CustomersRegisterComponent } from './customers-register/customers-register.component';
import { CustomersManageComponent } from './customers-manage/customers-manage.component';


@NgModule({
  declarations: [
    ReceptionsComponent,
    HeaderReceptionComponent,
    CustomersRegisterComponent,
    CustomersManageComponent
  ],
  imports: [
    CommonModule,
    ReceptionsRoutingModule,
    AngularMaterialModule,
    FormsModule,ReactiveFormsModule

  ]
})
export class ReceptionsModule { }
