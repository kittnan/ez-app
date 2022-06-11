import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-manage',
  templateUrl: './users-manage.component.html',
  styleUrls: ['./users-manage.component.scss']
})
export class UsersManageComponent implements OnInit {

  members:any
  filtered:any[] = []
  searchKey:any
  constructor(
    private API : ApiService
  ) {

   }

  ngOnInit(): void {
    this.API.getMembers().subscribe(res=>{
      this.members = res
      this.filtered  = res
    })
  }

  onSearch(event:any){
    const key :any= (event.target.value).toLowerCase()
    if(key){
      this.filtered = this.members.filter((m:any)=>
      m.memberId.toLowerCase().includes(key) ||
      m.firstName.toLowerCase().includes(key) ||
      m.lastName.toLowerCase().includes(key)
      )
    }else{
      this.filtered = this.members
    }
  }

  onClickDelete(item:any){
    Swal.fire({
      title:`Do you want to delete ${item.titleName}${item.firstName} ${item.lastName}`,
      icon:'question',
      showCancelButton:true
    }).then(result=>{
        if(result.isConfirmed){
          this.API.deleteMember(item._id).subscribe(res=>{
            if(res){
              Swal.fire('Success','','success')
              this.API.getMembers().subscribe(res=>{
                this.members = res
                this.filtered  = res
              })
            }
          })
        }
    })
  }

}
