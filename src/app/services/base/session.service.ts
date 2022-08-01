import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { environment } from 'src/environments/environment';
import { SessionUser, Dealer, DealerGroup } from 'src/app/models/base.model';
import { getJSONfromLocalStorage } from 'src/app/utils/base.utils';
@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private _token: string;
  private _dgSuiteToken: string | null;
  private _user: SessionUser;
  private _permissions: string[];
  private _userGroups: DealerGroup[];
  private _userDealers: Dealer[];
  private _currentDealer: Dealer;

  /**
   * Get the current token
   * @return current token
   */
  public get token() {
    return this._token;
  }

  /**
   * Update the token and store it on localStorage
   */
  public set token(newToken: string) {
    this._token = newToken;
    localStorage.setItem('security_token', newToken);
  }

  /**
   * Get the current DealerGeek Suite token
   * @returns DealerGeek suite token
   */
  public get dgSuiteToken() {
    return this._dgSuiteToken;
  }

  /**
   * Update the DealerGeek Suite token
   */
  public set dgSuiteToken(newDgSuiteToken: string | null) {
    this._dgSuiteToken = newDgSuiteToken;
  }

  /**
   * Get the current user
   * @returns Current user
   */
  public get user() {
    return this._user;
  }

  /**
   * Update the current user
   */
  public set user(newUser: SessionUser) {
    this._user = newUser;
    localStorage.setItem('sessionUser', JSON.stringify(newUser));
  }

  /**
   * Get the SessionUser permissions
   * @returns String array with the SessionUser permissions
   */
  public get permissions() {
    return this._permissions;
  }

  /**
   * Update the SessionUser permissions
   */
  public set permissions(newPermissions: string[]) {
    this._permissions = newPermissions;
    localStorage.setItem(
      'sessionUserPermission',
      JSON.stringify(newPermissions)
    );
  }

  /**
   * Get the SessionUser available groups
   * @returns String array with the SessionUser groups
   */
  public get userGroups() {
    return this._userGroups;
  }

  /**
   * Update the SessionUser groups
   */
  public set userGroups(newUserGroups: DealerGroup[]) {
    this._userGroups = newUserGroups;
    localStorage.setItem('sessionUserGroups', JSON.stringify(newUserGroups));
  }

  /**
   * Get the SessionUser available dealers
   * @returns String array with the SessionUser groups
   */
  public get userDealers() {
    return this._userDealers;
  }

  /**
   * Update the SessionUser dealers
   */
  public set userDealers(newUserDealers: Dealer[]) {
    this._userDealers = newUserDealers;
    localStorage.setItem('sessionUserDealers', JSON.stringify(newUserDealers));
  }

  /**
   * Get the SessionUser current dealer
   * @returns Current dealer object
   */
  public get currentDealer(): Dealer {
    return this._currentDealer;
  }

  public set currentDealer(newCurrentDealer: Dealer) {
    this._currentDealer = newCurrentDealer;
    localStorage.setItem('currentDealer', JSON.stringify(newCurrentDealer));
  }

  constructor(private cookieService: CookieService) {

    !environment.production && environment.token &&
      this.cookieService.put('dgtoken', environment.token);
    this._token = localStorage.getItem('security_token') || '';
    this._dgSuiteToken = this.cookieService.get('dgtoken') || '';
    this._user = getJSONfromLocalStorage<SessionUser>(
      'sessionUser',
      new SessionUser()
    );
    this._permissions = getJSONfromLocalStorage<string[]>(
      'sessionUserPermission',
      []
    );
    this._userGroups = getJSONfromLocalStorage<DealerGroup[]>(
      'sessionUserGroups',
      []
    );
    this._userDealers = getJSONfromLocalStorage<Dealer[]>(
      'sessionUserDealers',
      []
    );
    this._currentDealer = getJSONfromLocalStorage<Dealer>(
      'currentDealer',
      new Dealer()
    );
  }

  /**
   * Checks if the user is logged in the DealerGeek suite
   * @returns Boolean representation of the DealerGeek suite authentication state
   */
  hasActiveSuiteSession(): boolean {
    return Boolean(this.dgSuiteToken);
  }

  /**
   * Checks if the user is logged in
   * @returns Boolean representation of the authentication state
   */
  hasActiveSession(): boolean {
    return Boolean(this.token);
  }

  setUserCredentials(userData: any): void {
    // De-construct userData object
    const {
      security_token,
      d_user,
      security_actions,
      dealer_group_access,
      dealer_access,
    } = userData;

    // Update the user data
    this.token = security_token;
    this.user = d_user;
    this.permissions = security_actions;
    this.userGroups = dealer_group_access;
    this.userDealers = dealer_access;
    this.currentDealer =
      this.userDealers.length > 0 ? this.userDealers[0] : new Dealer();
  }

  /**
   * Clears the users sessionStorage and localStorage, removing its credentials
   */
  clearUserCredentials(): void {
    sessionStorage.clear();
    localStorage.clear();
    this.token = '';
  }

  /**
   * Redirect the user to the DealerGeek suite (Only on production)
   */
  redirectToSuite(): void {
    if (environment.production) {
      const currentApp = JSON.stringify({
        appCode: 'dgsnipercall',
        url: window.location.href,
      });
      window.location.href = environment.dgSuite + btoa(currentApp);
    }
    else {
      console.warn("Redirect to suite");
    }
  }
}
