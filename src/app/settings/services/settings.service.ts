import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, of } from 'rxjs';
import { Field, Term } from '../models/Term';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  url = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getContractFields(): Observable<Term[]> {
    // return this.http.get<Application[]>(`${this.baseUrl}/application`)
    return of([{name: 'Contractor Name', status: true}, {name: 'Type of Contract', status: true},{name: 'Phone', status: true},{name: 'email', status: true},{name: 'Periodicity', status: true},{name: 'Contract Value', status: true},{name: 'Due Date', status: true},{name: 'Duration Date', status: true},{name: 'Responsible', status: true},{name: 'Status', status: true},{name: 'Notification Date', status: false}, {name: 'Phone 2', status: false},{name: 'Lawyer Name', status: false},
    {name: 'Contractor Name', status: true}, {name: 'Type of Contract', status: true},{name: 'Phone', status: true},{name: 'email', status: true},{name: 'Periodicity', status: true},{name: 'Contract Value', status: true},{name: 'Due Date', status: true},{name: 'Duration Date', status: true},{name: 'Responsible', status: true},{name: 'Status', status: true},{name: 'Notification Date', status: false}, {name: 'Phone 2', status: false},{name: 'Lawyer Name', status: false}])
  }

  createContractFields(
    name: string,
    status: string,
    type: string
  ): Observable<Field> {
    return this.http.post<Field>(`${this.url}contract_fields/`,{
      field_label: name,
      field_status: status,
      field_type: type
    })
  }
}
