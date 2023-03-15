import { Component, HostListener, OnInit } from '@angular/core';

import { LoadingController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from './services/user.service';
import { PageService } from './services/page.service';
import { FavoritesService } from './services/favorites.service';
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic";
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';

declare var cordova;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  @HostListener('body: click', ['$event'])
  bodyClicked(ev: any) {
    if(ev.target.tagName == 'A') {
      ev.stopPropagation();
      ev.preventDefault();
      const url = ev.target.attributes.href.nodeValue
      cordova.exec(() => {
        console.log('broser is opened')
      }, err => {
        console.error(err)
      }, 'OpenInBrowser', 'openUrl', [url]);
    }
  }

  // Nothing is selected at start
  public selectedIndex = 1000;
  public selectedCatIndex = 1000;
  public selectedSecIndex = 1;
  public appPages = [
    {
      title: 'Training Programs',
      url: '/training-programs',
      icon: 'star'
    },
    {
      title: 'Tactical Lessons',
      url: '/tactical-lessons',
      icon: 'content_paste'
    },
    {
      title: 'Kids Academy',
      url: '/kids-academy',
      icon: 'school'
    },
    {
      title: 'Physical Programs',
      url: '/physical-programs',
      icon: 'fitness_center'
    },
    {
      title: 'Mental Courses',
      url: '/mental-courses',
      icon: 'psychology'
    },
    {
      title: 'Podcasts',
      url: '/podcasts',
      icon: 'headset'
    },
    {
      title: 'Tutorials',
      url: '/tutorials',
      icon: 'ondemand_video'
    },
    {
      title: 'Articles',
      url: '/articles',
      icon: 'local_library'
    }
  ];

  categoryItems: any = [
    {
      name: 'Singles',
      icon: 'person'
    },
    {
      name: 'Doubles',
      icon: 'people'
    },
    {
      name: 'Mixed doubles',
      icon: 'people_alt'
    }
  ];

  fcm: any = FCM;

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  loading: any;
  isLoading: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public userService: UserService,
    public pageService: PageService,
    public favoritesService: FavoritesService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private storageService: StorageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.fcm.requestPushPermission().then(res => {
        console.log('has permission 2', res);
      })
      this.fcm.hasPermission().then(res => {
        console.log('has permission', res);
        this.fcm.getToken().then((token: any) => {
          console.log('token ==>', token);
      }).catch((err) => console.log('error', JSON.stringify(err)));
        this.fcm.onTokenRefresh().subscribe((token: any) => {
          console.log('tokenRefresh ==>', token);
        }, err => console.log('errorRefres', err.message));
      }).catch(err => {
        console.log(err);
      });
   

      let temp = window.localStorage.getItem('notificationsEnabled') || await this.storageService.get('notificationsEnabled');
      if(temp) {
        this.fcm.subscribeToTopic('all-active');
      } else {
        if(!window.localStorage.getItem('hadEnabledNotificatoins')) {
          window.localStorage.setItem('hadEnabledNotificatoins', 'true');
          this.storageService.set('notificationsEnabled', true);
          window.localStorage.setItem('notificationsEnabled', 'true');
          this.fcm.subscribeToTopic('all-active');
        }
      }
      
    });
  }

  ngOnInit() {
    this.startLoading();
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

    this.userService.currentUser().then((user) => {
      if (user)
        this.initLoggedEssentials();
    }, error => {
      this.stopLoading();
      this.router.navigate(['']);
    });
  }

  initLoggedEssentials() {
    this.pageService.initMainPages();
    this.stopLoading()
    
    // Making sure that user gets latest favorites and playlists
    this.favoritesService.getFavorites().subscribe(res => {});
    this.favoritesService.getPlaylists().subscribe(res => { });
  }

  async startLoading() {
    if(this.loading) {
      // Just in case loading is still opened
      this.loading.dismiss();
    }
    this.loading = await this.loadingCtrl.create();

    this.loading.present();
    this.isLoading = true;
  }

  async stopLoading() {
    if(!this.loading) {
      return ;
    }
    this.loading.dismiss();
    this.isLoading = false;
  }

  logout() {
    return this.userService.logout(true);
  }
}
