import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface NewInquiry {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  additionalInfo: string;
}
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendEmail(newInquiry: NewInquiry){
    console.log('send email!');
    return this.http.post('https://northern-voyages.azurewebsites.net/api/sendEmail', newInquiry, {observe: 'response'});
  }
}
