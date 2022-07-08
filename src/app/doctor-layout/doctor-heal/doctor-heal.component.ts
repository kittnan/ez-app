import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
@Component({
  selector: 'app-doctor-heal',
  templateUrl: './doctor-heal.component.html',
  styleUrls: ['./doctor-heal.component.scss']
})
export class DoctorHealComponent implements OnInit {

  constructor(private API: ApiService) { }

  ngOnInit(): void {
    this.API.getCheckup().subscribe((res) => {
      console.log(res);
      
    });
  }

  checkGroup(group:any){
    if(group.checked){
      return false
    }
    return true
  }


  onChangeSide(side:any){
    // let filterResult = this.sides.filter((s:any)=> s!= side )
    // filterResult.map((f:any)=> f.checked = false)
  }

  onSubmit(){
    // // const filterResult = this.test.filter((t:any)=> t.checked)
    // const filterSidesResult = this.sides.filter((t:any)=> t.checked)
    // const f = [filterResult,filterSidesResult] 
    // console.log(filterResult,filterSidesResult);
    // this.API.addCheckup(this.sides).subscribe((res) => {
    // });
  }

  

}
