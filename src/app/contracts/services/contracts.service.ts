import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@services/base/http.service';
import { Observable, ObservableLike, of } from 'rxjs';
import { Field } from 'src/app/shared/models/Field';
import { Contract_Overview } from '../models/ContractOverview';

@Injectable({
  providedIn: 'root'
})
export class ContractsService extends HttpService {

  constructor(http: HttpClient) {
    super(http);
  }


  public getFields(): Observable<Field[]> {
    return this.get('contract_fields');
  }

}
