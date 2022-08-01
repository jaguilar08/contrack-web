import { HttpClient } from '@angular/common/http';
import { Success } from '@models/Success';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Base methods for communicating with the API
 */
export class HttpService {
  constructor(protected http: HttpClient) {
    if (!environment.production) {
    }
  }

  /**
   * Base GET request
   * @param endpoint Endpoint's name
   */
  protected get<T>(endpoint: string): Observable<any> {
    return this.http.get<T>(environment.apiUrl.concat(endpoint));
  }

  /**
   * Base POST request
   * @param endpoint Endpoint's name
   * @param args Arguments to be passed on the body of the request
   */
  protected post<T>(endpoint: string, args: Object, options?: any): any {
    return this.http.post<T>(environment.apiUrl.concat(endpoint), args, options);
  }

  /**
   * Base PUT request
   * @param endpoint Endpoint's name
   * @param args Arguments to be passed on the body of the request
   */
  protected put<T>(endpoint: string, args: Object): any {
    return this.http.put<T>(environment.apiUrl.concat(endpoint), args);
  }

  /**
   * Base DELETE request (by Path)
   * @param endpoint Endpoint's name
   * @param args Arguments to be used as the complement of the path
   */
  protected deletePath<T>(endpoint: string, ...args: any[]): any {
    return this.http.delete<T>(environment.apiUrl.concat(endpoint, '/', args.join('/')));
  }

  /**
   * Base DELETE Request
   * @param endpoint Endpint's name
   * @param args Arguments to be passed on the body of the request
   */
  protected delete<T>(endpoint: string, args: Object, options?: any): any {
    const nOptions = Object.assign(options || {}, { body: args });
    return this.http.delete<T>(environment.apiUrl.concat(endpoint), nOptions);
  }

  /**
   * Make the request for Authentication
   * @returns
   */
  onAuthentication(): Observable<Object> {

    return this.get('one_authentication');
  }

  /**
   * Check if the stored token is valid
   * @returns
   */
  hasValidToken(): Observable<Success> {
    return this.get('is_authorized');
  }

  /**
   * Logout from the current session
   */
  public logout(): Observable<any> {
    return this.get('logout');
  }
}
