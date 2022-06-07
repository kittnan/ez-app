import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-users-register',
  templateUrl: './users-register.component.html',
  styleUrls: ['./users-register.component.scss']
})
export class UsersRegisterComponent implements OnInit {
  
  registerForm = new FormGroup({
    memberId: new FormControl('', Validators.required),
    idCard: new FormControl('', Validators.required),
    titleName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    passWord: new FormControl('', Validators.required),
    tryPassword: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    description: new FormControl(''),
    updateAt: new FormControl('', Validators.required),
    createAt: new FormControl(''),
    updateBy: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
