import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-heal',
  templateUrl: './doctor-heal.component.html',
  styleUrls: ['./doctor-heal.component.scss']
})
export class DoctorHealComponent implements OnInit {


  test:any[]= [
    {
      group: "ตรวจฟัน",
      code: "0",
      checked: false,
      items:[
        {
          code: "02",
          name: "ตรวจฟัน/นัดทำต่อ",
          checked: false,
        }
      ]
    },
    {
      group: "ทันตสุขศึกษา",
      code: "1",
      checked: false,
      items:[
        {
          code: "12",
          name: "เรื่องหินปูน, แผ่นคราบฟัน, การแปรงฟัน",
          checked: false,
        },
        {
          code: "12",
          name: "เรื่องหินปูน, แผ่นคราบฟัน, การแปรงฟัน",
          checked: false,
        },
        {
          code: "12",
          name: "เรื่องหินปูน, แผ่นคราบฟัน, การแปรงฟัน",
          checked: false,
        },
        {
          code: "12",
          name: "เรื่องหินปูน, แผ่นคราบฟัน, การแปรงฟัน",
          checked: false,
        }
      ]
    }
  ]

  sides:any[] = [
    {
      group: "ด้าน1",
      code: "1",
      checked : false,
      items: [
        {
          code: "11",
          name: "O",
          checked: false,
        },
        {
          code: "12",
          name: "M",
          checked: false,
        },
      ]
    },
    {
      group: "ด้าน2",
      code: "2",
      checked : false,
      items: [
        {
          code: "21",
          name: "O",
          checked: false,
        },
        {
          code: "22",
          name: "M",
          checked: false,
        },
      ]
    },
    {
      group: "ด้าน3",
      code: "3",
      checked : false,
      items: [
        {
          code: "31",
          name: "O",
          checked: false,
        },
        {
          code: "32",
          name: "M",
          checked: false,
        },
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  checkGroup(group:any){
    if(group.checked){
      return false
    }
    return true
  }

  onChangeSide(side:any){
    let filterResult = this.sides.filter((s:any)=> s!= side )
    filterResult.map((f:any)=> f.checked = false)
  }

  onSubmit(){
    const filterResult = this.test.filter((t:any)=> t.checked)
    const filterSidesResult = this.sides.filter((t:any)=> t.checked)
    console.log(filterResult,filterSidesResult);
  }

}
