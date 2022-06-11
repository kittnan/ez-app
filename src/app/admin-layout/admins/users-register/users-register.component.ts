import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/API/api.service';
import Swal from 'sweetalert2';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users-register',
  templateUrl: './users-register.component.html',
  styleUrls: ['./users-register.component.scss'],
})
export class UsersRegisterComponent implements OnInit {
  registerForm = new FormGroup({
    memberId: new FormControl('', Validators.required),
    idCard: new FormControl('', Validators.required),
    titleName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required),
    tryPassword: new FormControl(false, Validators.requiredTrue),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    description: new FormControl(''),
    updateBy: new FormControl('', Validators.required),
  });

  constructor(private usersService: UsersService, private API: ApiService) {
    this.registerForm.controls.updateBy.setValue('admin');
  }

  async ngOnInit(): Promise<void> {
    this.registerForm.controls.memberId.setValue(
      await this.usersService.setMemberId()
    );
  }

  onSubmit() {
    console.log(this.registerForm.value);
    Swal.fire({
      title: 'Do you want to add new member?',
      icon: 'question',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.insertMember();
      }
    });
  }

  checkPassword() {
    if (this.registerForm.value.password == this.registerForm.value.password2) {
      this.registerForm.controls.tryPassword.setValue(true);
    } else {
      this.registerForm.controls.tryPassword.setValue(false);
    }
  }

  private insertMember() {
    this.API.addMembers(this.registerForm.value).subscribe((res) => {
      if(res.length > 0){
        Swal.fire('Success','','success')
        this.registerForm.reset()
      }
    });
  }
}
