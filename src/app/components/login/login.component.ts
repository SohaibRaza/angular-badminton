import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonSlides, Platform, ToastController } from '@ionic/angular';
import { MediaService } from 'src/app/services/media.service';
import { PageService } from 'src/app/services/page.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { TouchID } from '@ionic-native/touch-id/ngx';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginImgs: string[] = [];
  public loginStep: number = 1;
  public loginForm: any = {};
  public forgotForm: any = {};
  public slideOpts: any = {};
  public loading: boolean = false;
  public tempPlaceholder: string;
  public androidAvailable: boolean = false;
  public iosAvailable: boolean = false;

  @ViewChild('slides', {static: true}) slides: IonSlides;

  constructor(
    private userService: UserService,
    private router: Router,
    private pageService: PageService,
    private mediaService: MediaService,
    public formBuilder: FormBuilder,
    public toast: ToastController,
    public touchId: TouchID,
    public androidFingerprintAuth: AndroidFingerprintAuth,
    private platform: Platform,
  ) {
    if(this.mediaService.loginImages) {
      this.loginImgs = this.mediaService.loginImages;
    }

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.forgotForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.mediaService.getLoginImages().subscribe((res: Array<any>) => {
      this.loginImgs = res;
      console.log(this.loginImgs);
    });

    this.userService.currentUser().then((res: any) => {
      this.router.navigateByUrl('/media', { replaceUrl: true });
      return ;
    }, err => {
      this.userService.logout(false);
    });

    this.platform.ready().then(res => {
      this.iosTouchInit();
      this.androidTouchInit();
    })
    
  }


  iosTouchInit() {
    console.log('was called touch init');
    this.touchId.isAvailable()
      .then(
        res => {
          console.log('TouchID is available!', res);
          this.iosAvailable = !!window.localStorage.getItem('scanAuthEnabled');
        },
        err => console.error('TouchID is not available', err)
      ).catch(err => console.error(err));     
  }

  androidTouchInit() {
    this.androidFingerprintAuth.isAvailable()
      .then((result)=> {
        this.androidAvailable = result.isAvailable && !!window.localStorage.getItem('scanAuthEnabled');
      })
      .catch(error => console.error(error));
  }

  login() {
    if(this.loginStep == 1) {
      this.loginStep = 2;
      if(this.androidAvailable) {
        this.showAndroidScanId();
      }

      if(this.iosAvailable) {
        this.showIosScanID()
      }

      return;
    }

    const temp = this.loginForm.value;
    this.loading = true;
    this.loginWithUser(temp);
  }

  slideBack() {
    this.slides.slideTo(0);
  }

  showAndroidScanId() {
    this.androidFingerprintAuth.encrypt({ clientId: 'myAppName', username: 'myUsername', password: 'myPassword' })
      .then(result => {
        if (result.withFingerprint) {
            console.log('Successfully encrypted credentials.');
            console.log('Encrypted credentials: ' + result.token);
            let creds: any = window.localStorage.getItem('userFinger');
            if(creds) {
              creds = creds.split(':');
              this.loginWithUser({
                username: creds[0],
                password: creds[1]
              });
            }
        } else if (result.withBackup) {
          console.log('Successfully authenticated with backup password!', result);
        } else console.log('Didn\'t authenticate!');
      })
      .catch(error => {
        if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
          console.log('Fingerprint authentication cancelled');
        } else console.error(error)
      });
  }

  showIosScanID() {
    this.touchId.verifyFingerprintWithCustomPasswordFallback('Please scan your id')
      .then(
        res => {
          console.log('Ok', res);
          let creds: any = window.localStorage.getItem('userFinger');
          if(creds) {
            creds = creds.split(':');
            this.loginWithUser({
              username: creds[0],
              password: creds[1]
            });
          }
        },
        err => console.error('Error', err)
      );
  }

  loginWithUser(temp: {
    username: string,
    password: string
  }) {
    this.userService.login(temp.username, temp.password).subscribe(user => {
      if(user.access_token) {
        this.userService.getSubscriptions().subscribe(async (res: any) => {
          if(environment.env == 'dev') {
            this.userService.loggedIn = true;
            
          } else if(!res.is_active) {
            this.userService.logout(false);
            const toast = await this.toast.create({
              message: 'Your subscribtion status is not active.',
              color: 'danger',
              position: 'bottom',
              duration: 2500
            });
      
            toast.present();
            return ;
          }

          this.userService.loggedIn = true;
          this.userService.loggedUser.next(user);
          window.localStorage.setItem('userFinger', temp.username + ':' + temp.password);
          this.pageService.initMainPages();
          this.router.navigateByUrl('/browse', { replaceUrl: true });
        })
        
      }
      this.loading = false;
    }, async err => {
      let msg = 'Something went wrong, please try again later.';

      if(err.error && err.error.message) {
        msg = err.error.message.replace('Lost your password?', '');
      }

      const toast = await this.toast.create({
        message: msg,
        color: 'danger',
        position: 'bottom',
        duration: 2500
      });

      toast.present();

      this.loading = false;
    })
  }

  removePlaceholder(ev: any) {
    this.tempPlaceholder = ev.target.placeholder;
    ev.target.placeholder = '';
  }

  putPlaceholder(ev: any) {
    ev.target.placeholder = this.tempPlaceholder;
  }

  getHref(img: any) {
    return img.alt_text.split(':')[1];
  }

  sendResetPassword() {
    if(this.loading) {
      return;
    }

    this.loading = true;
    const data = this.forgotForm.value;

    this.userService.sendResetPassword(data).subscribe(async (res: any) => {
      console.log(res);
      let msg = 'Success! Please check your email';
      if(res.error) {
        msg = res.error;  
      }

      const toast = await this.toast.create({
        message: msg,
        color: res.error ? 'danger' : 'success',
        position: 'bottom',
        duration: 2500
      });

      toast.present();

      this.loading = false;
    })
  }
}
