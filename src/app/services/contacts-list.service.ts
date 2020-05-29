import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Contact } from '../models/Contact';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ContactsListService {

  contactsUrl = 'https://randomuser.me/api/?&results=200&inc=name,location,email,cell,picture';

  constructor(private http:HttpClient) { }

  getContcts():Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.contactsUrl}`)
      .pipe(map(response => response['results']));
  }

  getOneContact():Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.contactsUrl}`)
      .pipe(map(response => response['results']));
  }

}
