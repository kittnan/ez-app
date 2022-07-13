import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import Swal from 'sweetalert2';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogCheckupComponent } from './dialog-checkup/dialog-checkup.component';
import { ToastService } from 'src/app/services/toast.service';
@Component({
  selector: 'app-master-manage',
  templateUrl: './master-manage.component.html',
  styleUrls: ['./master-manage.component.scss'],
})
export class MasterManageComponent implements OnInit {
  masters = ['checkHeal'];
  master: any;

  masters_select: any[] = [];
  filtered: any[] = [];
  constructor(
    private _api: ApiService,
    public dialog: MatDialog,
    private _toast: ToastService
  ) {}

  ngOnInit(): void {}

  onSelect() {
    if (this.master == 'checkHeal') {
      this._api.getCheckup().subscribe((res) => {
        this.masters_select = res;
        this.filtered = res;
      });
    }
  }

  onFilter(key: string) {
    if (key != '') {
      const Key = key.toLowerCase();
      this.filtered = this.masters_select.filter(
        (m) =>
          m.groupType.toLowerCase().includes(Key) ||
          m.group.toLowerCase().includes(Key) ||
          m.code.toLowerCase().includes(Key)
      );
    } else {
      this.filtered = this.masters_select;
    }
  }

  onAdd() {
    const dialogRef = this.dialog.open(DialogCheckupComponent, {
      width: '50%',
      height: '80%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.length > 0) {
        this._api.getCheckup().subscribe((res) => {
          this.masters_select = res;
          this.filtered = res;
        });
      }
    });
  }

  onEdit(item: any) {
    this.dialog.open(DialogCheckupComponent, {
      width: '50%',
      height: '80%',
      data: item,
    });
  }

  onDelete(item: any) {
    Swal.fire({
      title: `Do you want to delete ${item.group}?`,
      icon: 'question',
      showCancelButton: true,
    }).then((ans) => {
      if (ans.isConfirmed) {
        this._api.deleteCheckup(item._id).subscribe((res) => {
          if (res) {
            this._toast.success();
            this._api.getCheckup().subscribe((res) => {
              this.masters_select = res;
              this.filtered = res;
            });
          }
        });
      }
    });
  }
}
