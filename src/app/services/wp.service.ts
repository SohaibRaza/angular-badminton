import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WPService {
  public token: string;
  public refreshToken: string;
  
  constructor(
    private http: HttpClient
  ) {
    const tempToken = window.localStorage.getItem('userToken');
    const tempRefresh = window.localStorage.getItem('refreshToken');
    this.token = tempToken;
    this.refreshToken = tempRefresh;
  }

  /**
   * Sending request by attaching authorization header to it
   * @param url url to send to 
   * @param method method of the http request
   */
  public sendRequest(url: string, method: 'get' | 'post' | 'put' | 'delete', body: any, headers: any = {}) {
    if(this.token) {
        headers.Authorization = headers.Authorization ? headers.Authorization : 'Bearer ' + this.token;
    }

    switch (method) {
      case 'get':
      return this.http.get(url, {
        headers: headers,
        params: body
      });

      case 'post':
      return this.http.post(url, body, {
        headers: headers
      });

      case 'put':
      return this.http.put(url, body, {
        headers: headers
      });

      case 'delete':
      return this.http.delete(url, {
        headers: headers
      });
    }
  }

  genericObservable(url, method, params, headers = {}): Observable<any> {
    return new Observable((observer) => {
      this.sendRequest(url, method, params, headers).subscribe(res => {
        observer.next(res);
        observer.complete();
      }, err => {
        if (err.status == 401) {
          return this.sendRequest(environment.jwtUrl + 'tokens/refresh', 'post', {
            token: this.refreshToken
          }).subscribe((res: any) => {
            if (res.access_token) {
              this.setToken(res.access_token);
              observer.next(this.sendPost(url, params));
              observer.complete();
            }
          }, err => {
            observer.error(err);
            observer.complete();
          })
        }
      })
    });
  }

  /**
   * Sending post request to a given url, including handling of refresh token
   * @param url url
   * @param body body of the post
   */
  sendPost(url: any, body: any): Observable<any> {
    return this.genericObservable(url, 'post', body);
  }

  /**
   * Sending get request to given url, including handling of refresh token
   * @param url url string
   * @param params query params for get request
   */
  sendGet(url: any, params: any, headers?: any) {
    return this.genericObservable(url, 'get', params, headers);
  }
  
  /**
   * Setting current active token
   * @param token string representation of the token
   */
  setToken(token: string) {
    this.token = token;
    window.localStorage.setItem('userToken', token);
  }

  /**
   * Sending guest request. Is used for login so error message can be handled without trying to refresh the token
   * @param url url of request
   * @param body body object of the request
   */
  sendGuestPost(url: any, body: any) {
    return this.sendRequest(url, 'post', body);
  }
}
