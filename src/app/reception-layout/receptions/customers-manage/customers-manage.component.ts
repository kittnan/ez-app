import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customers-manage',
  templateUrl: './customers-manage.component.html',
  styleUrls: ['./customers-manage.component.scss'],
})
export class CustomersManageComponent implements OnInit {
  customers: any;
  filtered: any[] = [];
  searchKey: any;
  constructor(
    private API: ApiService, public dialog: MatDialog,
    private router: Router) {}

  ngOnInit(): void {
    this.API.getCustomers().subscribe((res) => {
      this.customers = res;
      this.filtered = res;
    });
  }

  onSearch(event: any) {
    const key: any = event.target.value.toLowerCase();
    if (key) {
      this.filtered = this.customers.filter(
        (c: any) =>
          c.customerId.toLowerCase().includes(key) ||
          c.firstName.toLowerCase().includes(key) ||
          c.lastName.toLowerCase().includes(key) ||
          c.idCard.toLowerCase().includes(key)
      );
    } else {
      this.filtered = this.customers;
    }
  }

  onClickDelete(item: any) {
    Swal.fire({
      title: `Do you want to delete ${item.titleName}${item.firstName} ${item.lastName}`,
      icon: 'question',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.API.deleteCustomer(item._id).subscribe((res) => {
          if (res) {
            Swal.fire('Success', '', 'success');
            this.API.getCustomers().subscribe((res) => {
              this.customers = res;
              this.filtered = res;
            });
          }
        });
      }
    });
  }

  openDialog(item:any) {
    const dialogRef = this.dialog.open(ViewDialog, {
      data: item,
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  onEdit(item:any){
    const itemStr:string = JSON.stringify(item)
    sessionStorage.setItem('customer',itemStr)
    this.router.navigate(['/receptions/manage/edit'])
  }

}

@Component({
  selector: 'viewDialog',
  templateUrl: './viewDialog.html',
  styleUrls: ['./customers-manage.component.scss'],

})
export class ViewDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
