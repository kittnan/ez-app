import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/API/api.service';
import { ToastService } from 'src/app/services/toast.service';

interface CheckupForm {
  groupType: string;
  group: string;
  code: string;
  checked: boolean;
  items: any[];
}

@Component({
  selector: 'app-dialog-checkup',
  templateUrl: './dialog-checkup.component.html',
  styleUrls: ['./dialog-checkup.component.scss'],
})
export class DialogCheckupComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>,
    private _api: ApiService,
    private _toast :ToastService
  ) {}
  forms!: CheckupForm;
  ngOnInit(): void {
    if (this.data) {
      this.forms = this.data;
    } else {
      this.forms = {
        groupType: '',
        group: '',
        code: '',
        checked: false,
        items: [],
      };
    }
  }

  validButton(){
    if(
      this.forms.groupType =='' ||
      this.forms.group  =='' ||
      this.forms.code ==''
      ) {
        return true
      }else{

        return false
      }
  }

  onAdd() {
    this.forms.items.push({
      code: '',
      name: '',
      checked: false,
    });
  }
  onDelete(item: any) {
    this.forms.items = this.forms.items.filter((t) => t != item);
  }

  onSave() {
    this._api.updateCheckup(this.data._id, this.forms).subscribe((res) => {
      if(res){
        this._toast.success()
        this.dialogRef.close()
      }
    });
  }

  onSubmit() {
    this._api.addCheckup(this.forms).subscribe(res=>{
      if(res.length >0){
        this._toast.success()
        this.dialogRef.close(res)
      }
    })
  }
}
