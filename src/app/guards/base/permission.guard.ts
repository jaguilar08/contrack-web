import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, UrlTree } from '@angular/router';
import { SessionService } from '@services/base/session.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PermissionGuard implements CanActivate {
  constructor(private sessionService: SessionService) { }

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const permissions: string[] = this.sessionService.permissions;
    const codes: string[] = route.data['permissions'];
    return codes.some((code) => permissions.includes(code));
  }
}
