import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-doctor',
  templateUrl: './header-doctor.component.html',
  styleUrls: ['./header-doctor.component.scss']
})
export class HeaderDoctorComponent implements OnInit {
  title = 'ez-app';
  title1 = 'Heal';
  public isAuthenticated = false;

  public logout(): void {
    // todo
  }
  constructor() { }

  ngOnInit(): void {
  }


}
