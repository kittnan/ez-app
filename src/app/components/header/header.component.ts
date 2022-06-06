import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'ez-app';
  public isAuthenticated = false;

  public logout(): void {
    // todo
  }
  constructor() { }

  ngOnInit(): void {
  }

}
