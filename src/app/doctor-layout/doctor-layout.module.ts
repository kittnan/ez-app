import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorLayoutComponent } from './doctor-layout.component';
import { HeaderDoctorComponent } from './header-doctor/header-doctor.component';
import { DoctorManageComponent } from './doctor-manage/doctor-manage.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorHealComponent } from './doctor-heal/doctor-heal.component';

@NgModule({
  declarations: [
    DoctorLayoutComponent,
    HeaderDoctorComponent,
    DoctorManageComponent,
    DoctorHealComponent,
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DoctorLayoutModule {}
