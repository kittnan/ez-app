
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/API/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {
  member: any;

  registerForm = new FormGroup({
    _id: new FormControl('', Validators.required),
    memberId: new FormControl('', Validators.required),
    
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

  constructor(
    private API : ApiService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    sessionStorage.removeItem('member')

  }

  ngOnInit(): void {
    const member: any = sessionStorage.getItem('member');
    this.member = JSON.parse(member);

    this.registerForm.patchValue({
      _id: this.member._id,
      memberId: this.member.memberId,
      
      titleName: this.member.titleName,
      firstName: this.member.firstName,
      lastName: this.member.lastName,
      gender: this.member.gender,
      username: this.member.username,
      password: this.member.password,
      password2: this.member.password2,
      tryPassword: this.member.tryPassword,
      address: this.member.address,
      phoneNumber:this.member.phoneNumber ,
      position:this.member.position ,
      email:this.member.email ,
      description: this.member.description,
      
     
      updateBy: this.member.updateBy,
    });

    this.registerForm.controls.memberId.disable()
    
  }
  checkPassword() {
    if (this.registerForm.value.password == this.registerForm.value.password2) {
      this.registerForm.controls.tryPassword.setValue(true);
    } else {
      this.registerForm.controls.tryPassword.setValue(false);
    }
  }

  onSubmit(){
    Swal.fire({
      title:'Do you want to update?',
      icon:'question',
      showCancelButton:true
    }).then(result=>{
      if(result.isConfirmed){
        this.API.updateMember(this.registerForm.value._id,this.registerForm.value).subscribe(res=>{
          if(res){
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'success',
              title: 'Update successfully'
            }).then(res=>{
              this.router.navigate(['/admins'])
              sessionStorage.removeItem('member')
            })
          }
        })
      }
    })

  }
}
