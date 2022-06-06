import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'receptions',
    loadChildren: () =>
      import('./reception-layout/receptions/receptions.module').then(
        (m) => m.ReceptionsModule
      ),
  },
  {
    path: 'admins',
    loadChildren: () =>
      import('./admin-layout/admins/admins.module').then((m) => m.AdminsModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
