import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AppService } from '@services/app.service';
import { SessionService } from '@services/base/session.service';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private sessionService: SessionService, private appService: AppService) {
  }

  authenticate(): Observable<any> {

    return this.appService.onAuthentication().pipe(
      map((res: any) => {

        this.sessionService.setUserCredentials(res);

        return true;
      }),
      catchError((e) => {
        console.log(e);

        return of(false)
      })
    );
  }

  canActivate(): any {
    if (!this.sessionService.hasActiveSuiteSession()) {
      this.sessionService.clearUserCredentials();
      this.sessionService.redirectToSuite();
      return false;
    }

    if (!this.sessionService.hasActiveSession()) {
      return this.authenticate();
    }

    return this.appService.hasValidToken().pipe(
      map(() => true),
      catchError((err: HttpErrorResponse) =>
        err.status === 401 ? this.authenticate() : of(false)
      )
    );
  }
}
