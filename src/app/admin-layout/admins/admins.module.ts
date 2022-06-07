import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminsRoutingModule } from './admins-routing.module';
import { AdminsComponent } from './admins.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { UsersRegisterComponent } from './users-register/users-register.component';
import { UsersManageComponent } from './users-manage/users-manage.component';

@NgModule({
  declarations: [
    AdminsComponent,
    HeaderAdminComponent,
    UsersRegisterComponent,
    UsersManageComponent,
  ],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    AngularMaterialModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class AdminsModule { }
