import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-reception',
  templateUrl: './header-reception.component.html',
  styleUrls: ['./header-reception.component.scss']
})
export class HeaderReceptionComponent implements OnInit {
  title = 'ez-app';
  public isAuthenticated = false;

  public logout(): void {
    // todo
  }
  constructor() { }

  ngOnInit(): void {
  }

}
