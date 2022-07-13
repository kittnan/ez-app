import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl<string | null>(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private route: Router, private _toast: ToastService) {}

  ngOnInit(): void {}

  onLogin() {
    if (this.loginForm.value.username == 'admin') {
      this._toast.success();
      setTimeout(() => {
        this.route.navigate(['admins/register']);
      }, 2500);
    } else if (this.loginForm.value.username == 're') {
      this._toast.success();
      setTimeout(() => {
        this.route.navigate(['receptions/register']);
      }, 2500);
    } else if (this.loginForm.value.username == 'doc') {
      this._toast.success();
      setTimeout(() => {
        this.route.navigate(['doctor/']);
      }, 2500);
    }else {
      this._toast.danger('login fail something it wrong')
    }
  }

}
