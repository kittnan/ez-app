import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/API/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss'],
})
export class CustomerEditComponent implements OnInit {
  customer: any;

  registerForm = new FormGroup({
    _id: new FormControl('', Validators.required),
    customerId: new FormControl('', Validators.required),
    idCard: new FormControl('', Validators.required),
    titleName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    birthDay: new FormControl('', Validators.required),
    age: new FormControl(''),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    xrayImage: new FormControl([]),
    congenitalDisease: new FormControl('', Validators.required),
    allergic: new FormControl('', Validators.required),
    description: new FormControl(''),
    status: new FormControl(''),
    tokenLine: new FormControl(''),
    updateBy: new FormControl('', Validators.required),
  });

  constructor(
    private API : ApiService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    sessionStorage.removeItem('customer')

  }

  ngOnInit(): void {
    const customer: any = sessionStorage.getItem('customer');
    this.customer = JSON.parse(customer);

    this.registerForm.patchValue({
      _id: this.customer._id,
      customerId: this.customer.customerId,
      idCard:this.customer.idCard ,
      titleName: this.customer.titleName,
      firstName: this.customer.firstName,
      lastName: this.customer.lastName,
      gender: this.customer.gender,
      birthDay: new Date(this.customer.birthDay).toISOString(),
      age: '99',
      address: this.customer.address,
      phoneNumber:this.customer.phoneNumber ,
      xrayImage: this.customer.xrayImage,
      congenitalDisease: this.customer.congenitalDisease,
      allergic:this.customer.allergic ,
      description: this.customer.description,
      status: this.customer.status,
      tokenLine: this.customer.tokenLine,
      updateBy: this.customer.updateBy,
    });

    this.registerForm.controls.customerId.disable()
    this.registerForm.controls.age.disable()
  }


  onSubmit(){
    Swal.fire({
      title:'Do you want to update?',
      icon:'question',
      showCancelButton:true
    }).then(result=>{
      if(result.isConfirmed){
        this.API.updateCustomer(this.registerForm.value._id,this.registerForm.value).subscribe(res=>{
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
              this.router.navigate(['/receptions'])
              sessionStorage.removeItem('customer')
            })
          }
        })
      }
    })

  }
}
