import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic";
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
import { TouchID } from '@ionic-native/touch-id/ngx';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  userInfo: any = {};
  sub: any = {};
  notificationsEnabled: boolean;
  scanAuthEnabled: boolean;
  scanAuthAvailable: boolean;

  constructor(
    public userService: UserService,
    private android: AndroidFingerprintAuth,
    private touchId: TouchID,
    private storageService: StorageService
  ) {

  }

  ngOnInit() {
    this.loadFromCache();
    this.userService.getMe().subscribe(res => {
      this.userInfo = res;
      window.localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    });

    this.userService.getSubscriptions().subscribe(res => {
      this.sub = res['subscriptions'];
      
      window.localStorage.setItem('sub', this.sub);
    });

    this.android.isAvailable().then(res => {
      this.scanAuthAvailable = res.isAvailable;
    });

    this.touchId.isAvailable()
      .then(
        res => {
          console.log('TouchID is available!', res);
          this.scanAuthAvailable = true;
        },
        err => console.error('TouchID is not available', err)
      ).catch(err => console.error(err));
  }

  async loadFromCache() {
    this.notificationsEnabled = !!await this.storageService.get('notificationsEnabled');
    this.scanAuthEnabled = !!await this.storageService.get('scanAuthEnabled');
    console.log('settings', this.notificationsEnabled, this.scanAuthEnabled)
    let temp = window.localStorage.getItem('userInfo');
    if(temp) {
      this.userInfo = JSON.parse(temp);
    }

    try {
      temp = window.localStorage.getItem('sub');
      if(temp) {
        this.sub = temp;
      }
    } catch(e) {
      console.log('error occured parsing sub');
    }
    
  }

  updateSettings() {
    if(!this.notificationsEnabled) {
      window.localStorage.removeItem('notificationsEnabled');
      this.storageService.set('notificationsEnabled', false);
      FCM.unsubscribeFromTopic('all-active');      
    } else {
      window.localStorage.setItem('notificationsEnabled', 'ture');
      this.storageService.set('notificationsEnabled', true);
      FCM.subscribeToTopic('all-active');
    }
  }

  logout() {
    return this.userService.logout(true);
  }

  updateAuthSettings() {
    if(!this.scanAuthEnabled) {
      window.localStorage.removeItem('scanAuthEnabled');
      this.storageService.set('scanAuthEnabled', false);
    } else {
      window.localStorage.setItem('scanAuthEnabled', 'ture');
      this.storageService.set('scanAuthEnabled', true);
    }
  }

}
