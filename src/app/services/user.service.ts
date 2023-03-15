import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WPService } from './wp.service';
import { switchMap, tap } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public loggedIn: boolean;
  public loggedUser: ReplaySubject<any> = new ReplaySubject(null);
  
  constructor(
    private wpService: WPService
  ) {
    if(this.wpService.token) {
      this.loggedIn = true;
    }
  }

  /**
   * Logging user with api
   * @param userName name of the user
   * @param password password
   */
  login(userName: string, password: string) {
    return this.wpService.sendGuestPost(environment.jwtUrl + 'login', {
      username: userName,
      password: password
    }).pipe(tap((res: {access_token: string, refresh_token: string}) => {
      console.log('wp token is set', res);

      if(res.access_token) {
        this.wpService.token = res.access_token;
        window.localStorage.setItem('userToken', res.access_token);
        window.localStorage.setItem('refreshToken', res.refresh_token);
      }
      
    }));
  }

  logout(reload: boolean) {
    this.loggedIn = false;
    this.loggedUser.next(null)
    this.wpService.token = null;
    window.localStorage.removeItem('userToken');
    window.localStorage.removeItem('refreshToken');
    window.localStorage.removeItem('userInfo'); 
  }

  /**
   * Getting current user info from backend
   */
  getMe() {
    return this.wpService.sendGet(environment.wpUrl + 'users/me', {
      context: 'edit'
    });
  }

  currentUser(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.getMe().subscribe(
        (res: any) => {
          this.loggedUser.next(res);
          resolve(res)
        },
        (err: any) => reject(err)
      )
    });
  }

  getLoggedUser(): ReplaySubject<any> {
    return this.loggedUser;
  }

  getSubscriptions() {
    return this.wpService.sendGet(environment.apiUrl + 'get-subscriptions', {});
  }

  /**
   * Sending request to reset password by email
   * @param data that contains an email field
   */
  sendResetPassword(data: {email: string}) {
    return this.wpService.sendPost(environment.apiUrl + 'forgot-password',
            data);
  }

  /**
   * Getting specific user
   * @param userId string id of the user
   */
  getUser(userId: string) {
    return this.wpService.sendGet(environment.wpUrl + 'users', {
      search: userId
    });
  }
}
