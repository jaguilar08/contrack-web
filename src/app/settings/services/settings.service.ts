import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Field } from '../models/Field';
import { Responsible } from '../models/Responsible';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  url = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getContractFields(): Observable<Field[]> {
    return this.http.get<Field[]>(`${this.url}contract_fields/`, {});
  }

  createContractFields(
    name: string,
    status: string,
    type: string
  ): Observable<Field> {
    return this.http.post<Field>(`${this.url}contract_fields/`, {
      field_label: name,
      field_status: status,
      field_type: type
    });
  }

  updateContractFields(field_code: string, field_status: string): Observable<string> {
    return this.http.put<string>(`${this.url}contract_fields/${field_code}`, { field_status });
  }

  createResponsibles( name: string ) {
    return this.http.post<Responsible>(`${this.url}responsibles/`,{name});
  }

  updateResponsible(_id: string, name: string ) {
    return this.http.put<Responsible>(`${this.url}responsibles/${_id}`,{name});
  }

  getResponsibles() {
    return this.http.get<Responsible[]>(`${this.url}responsibles/`);
  }
}
