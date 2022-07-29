import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Term } from '../models/Term';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  getContractFields(): Observable<Term[]> {
    // return this.http.get<Application[]>(`${this.baseUrl}/application`)
    return of([{name: 'Contractor Name', status: true}, {name: 'Type of Contract', status: true},{name: 'Phone', status: true},{name: 'email', status: true},{name: 'Periodicity', status: true},{name: 'Contract Value', status: true},{name: 'Due Date', status: true},{name: 'Duration Date', status: true},{name: 'Responsible', status: true},{name: 'Status', status: true},{name: 'Notification Date', status: false}, {name: 'Phone 2', status: false},{name: 'Lawyer Name', status: false},
    {name: 'Contractor Name', status: true}, {name: 'Type of Contract', status: true},{name: 'Phone', status: true},{name: 'email', status: true},{name: 'Periodicity', status: true},{name: 'Contract Value', status: true},{name: 'Due Date', status: true},{name: 'Duration Date', status: true},{name: 'Responsible', status: true},{name: 'Status', status: true},{name: 'Notification Date', status: false}, {name: 'Phone 2', status: false},{name: 'Lawyer Name', status: false}])
  }
}
