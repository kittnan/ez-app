import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {
  title = 'ADMIN';
  title1 = 'Register';
  public isAuthenticated = false;

  public logout(): void {
    // todo
  }
  constructor() { }

  ngOnInit(): void {
  }

}
