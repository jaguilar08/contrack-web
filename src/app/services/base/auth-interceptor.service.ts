import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Dealer } from '@models/base.model';
import { catchError, Observable, throwError } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private sessionService: SessionService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the correct token depending on the outgoing http request
    console.log('demasidos logs');

    const token: string | null = request.url.includes('authentication')
      ? this.sessionService.dgSuiteToken
      : this.sessionService.token;

    const currentDealer: Dealer = this.sessionService.currentDealer;

    const customHeaders: any = {
      'security-token': token || '',
    };

    // Append the current Dealer information to the headers
    if (currentDealer.code) {
      Object.assign(customHeaders, {
        'current-group': currentDealer.dealerGroupCode || '',
        'current-dealer': currentDealer.code
      });
    }

    // Apply all the request headers properties to the custom headers
    request.headers
      .keys()
      .forEach((key) => (customHeaders[key] = request.headers.get(key)));

    // Update the request with the custom Headers
    request = request.clone({ setHeaders: customHeaders });

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401 || err.status === 403) {
          this.sessionService.clearUserCredentials();
          switch (err.status) {
            case 401:
              !request.url.includes('is_authorized') &&
                this.sessionService.redirectToSuite();
              break;
            case 403:
              if (environment.production) {
                window.location.href = environment.error403;
              }
              break;
          }
        }
        return throwError(() => new Error(err.message));
      })
    );
  }
}
