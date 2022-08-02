import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Term } from '../models/Term';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  url = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getContractFields(): Observable<Term[]> {
    return this.http.get<Term[]>(`${this.url}contract_fields/`, {});
  }

  createContractFields(
    name: string,
    status: string,
    type: string
  ): Observable<Term> {
    return this.http.post<Term>(`${this.url}contract_fields/`, {
      field_label: name,
      field_status: status,
      field_type: type
    })
  }

  updateContractFields(field_code: string, field_status: string): Observable<string> {
    return this.http.put<string>(`${this.url}contract_fields/${field_code}`, { field_status });
  }
}
