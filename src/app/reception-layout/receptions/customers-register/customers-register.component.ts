import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/API/api.service';
import {CustomerService} from './customer.service';
@Component({
  selector: 'app-customers-register',
  templateUrl: './customers-register.component.html',
  styleUrls: ['./customers-register.component.scss']
})
export class CustomersRegisterComponent implements OnInit {

  registerForm = new FormGroup({
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
  constructor(private customerservice: CustomerService,  private API: ApiService) { 
    this.registerForm.controls.updateBy.setValue('reception');
    this.registerForm.controls.status.setValue('reception');
  }

  async ngOnInit(): Promise<void> {
    this.registerForm.controls.customerId.setValue(
      await this.customerservice.setcustomerId()
    );
  }
  onSubmit() {
    console.log(this.registerForm.value);
    Swal.fire({
      title: 'Do you want to add new Customer?',
      icon: 'question',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.insertMember();
      }
    });
  }

  private insertMember() {
    this.API.addCustomer(this.registerForm.value).subscribe(async (res) => {
      if(res.length > 0){
        Swal.fire('Success','','success')
        this.registerForm.reset()  
        this.registerForm.controls.customerId.setValue(
          await this.customerservice.setcustomerId()
        );
      }
    });
  }
}
