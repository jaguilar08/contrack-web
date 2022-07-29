import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './base/http.service';

@Injectable({
  providedIn: 'root'
})
export class AppService extends HttpService {

  constructor(http: HttpClient) {
    super(http);
  }
}
