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
    console.log('chale');
  }

  authenticate(): Observable<any> {
    console.log('wazaaa');

    return this.appService.onAuthentication().pipe(
      map((res: any) => {
        console.log('rodro is cool');

        this.sessionService.setUserCredentials(res);

        console.log('cola');
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
