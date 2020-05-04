import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import { ContactsListService } from '../../services/contacts-list.service';
import { Contact } from '../../models/Contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})

export class ListComponent implements OnInit {

  pageTitle = 'My Contacts';

  contactsList:Contact[];

  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  columns: number;

  constructor(private ContactsListService:ContactsListService) { }

   // Cards
   breakPoints() {
    switch(true) {
        case (window.innerWidth <= 480):
          this.columns = 1;
          break;
        case (window.innerWidth > 480 && window.innerWidth <= 640):
          this.columns = 2;
          break;
        case (window.innerWidth > 640 && window.innerWidth <= 992):
            this.columns = 3;
            break;
        default:
          this.columns = 5;
      }
    }

  ngOnInit(): void  {
    // Contact list
    this.ContactsListService.getContcts().subscribe(
      contactsList => { this.contactsList = contactsList },
      error => { }
    );

    this.breakPoints();

  }

  onResize(event) {
    this.breakPoints();
  }

}