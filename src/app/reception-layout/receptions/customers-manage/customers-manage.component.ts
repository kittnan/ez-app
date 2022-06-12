import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/API/api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-customers-manage',
  templateUrl: './customers-manage.component.html',
  styleUrls: ['./customers-manage.component.scss']
})
export class CustomersManageComponent implements OnInit {
  

  customers:any
  filtered:any[] = []
  searchKey:any
  constructor(private API : ApiService) {
    
   }
  
 
  ngOnInit(): void {
    this.API.getCustomers().subscribe(res=>{
      this.customers = res
      this.filtered  = res
    })
  }

  onSearch(event:any){
    const key :any= (event.target.value).toLowerCase()
    if(key){
      this.filtered = this.customers.filter((c:any)=>
      c.customerId.toLowerCase().includes(key) ||
      c.firstName.toLowerCase().includes(key) ||
      c.lastName.toLowerCase().includes(key)  ||
      c.idCard.toLowerCase().includes(key)
      )
    }else{
      this.filtered = this.customers
    }
  }


  onClickDelete(item:any){
    Swal.fire({
      title:`Do you want to delete ${item.titleName}${item.firstName} ${item.lastName}`,
      icon:'question',
      showCancelButton:true
    }).then(result=>{
        if(result.isConfirmed){
          this.API.deleteCustomer(item._id).subscribe(res=>{
            if(res){
              Swal.fire('Success','','success')
              this.API.getCustomers().subscribe(res=>{
                this.customers = res
                this.filtered  = res
              })
            }
          })
        }
    })
  }

}


