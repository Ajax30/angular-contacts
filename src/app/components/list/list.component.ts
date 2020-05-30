import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { from } from 'rxjs';
import { ContactsListService } from '../../services/contacts-list.service';
import { Contact } from '../../models/Contact';

export interface searchContact {
  'search': string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  pageTitle = 'My Contacts';

  contactsList:Contact[];

  searchQuery: string;

  constructor(private ContactsListService:ContactsListService, private fb: FormBuilder) { }

  contactsTableData: MatTableDataSource<any>;

  displayedColumns: string[] = ['fullName', 'photo', 'email', 'phone', 'city', 'country', 'actions'];

  searchContact = this.fb.group({});

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

    //Add the search box
    this.searchContact.addControl('search', this.fb.control(''));
  }
  
  clearSearch() {
    this.searchQuery = "";
    this.applyFilter();
  }

  applyFilter() {
    this.contactsTableData.filter = this.searchQuery.trim().toLowerCase();
  }

}