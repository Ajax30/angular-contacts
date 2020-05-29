import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
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

  constructor(private ContactsListService:ContactsListService) { }

  contactsTableData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName', 'photo', 'email', 'phone', 'city', 'country'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void  {
    // Contact list
    this.ContactsListService.getContcts().subscribe(
      contactsList => { 
        this.contactsList = contactsList;
        this.contactsTableData = new MatTableDataSource(contactsList);
        this.contactsTableData.paginator = this.paginator;
      },
      error => { }
    );
  }

}