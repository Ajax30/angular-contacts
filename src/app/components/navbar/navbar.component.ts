import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})

export class NavbarComponent implements OnInit {

  brand = "Contacts App";
  userName = "Jane Doe";

  constructor() { }

  ngOnInit(): void {
  }

}