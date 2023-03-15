import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  PopoverController,
  AlertController,
  AlertOptions,
} from '@ionic/angular';
import { ReplaySubject } from 'rxjs';
import { FavoritesService } from 'src/app/services/favorites.service';
import { VimeoService } from 'src/app/services/vimeo.service';
import { TrainingPlansPopoverComponent } from '../training-plans-popover/training-plans-popover.component';

@Component({
  selector: 'video-wrapper',
  templateUrl: './video-wrapper.component.html',
  styleUrls: ['./video-wrapper.component.scss'],
})
export class VideoWrapperComponent implements OnInit {
  @Input() videoId: string;
  @Input() pageInfo: string;
  @Input() hideLikes: boolean;
  @Output() downloadV: EventEmitter<any> = new EventEmitter();
  private isDownloading: boolean;
  private downloaded: boolean;
  private downloadError: boolean;
  isPopUp: boolean;
  progressDownload: ReplaySubject<any> = new ReplaySubject(0);

  private cancelOptions: AlertOptions = {
    header: 'Are you sure you want to cancel download?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          // this.handlerMessage = 'Alert canceled';
        },
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => {
          // this.handlerMessage = 'Alert confirmed';
          this.downloaded = false;
          this.isDownloading = false;
          this.vimeoService.cancelDownload();
        },
      },
    ],
  }

  constructor(
    public favoritesService: FavoritesService,
    public popoverController: PopoverController,
    private vimeoService: VimeoService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {}

  getCorrecWidth() {
    return (window.innerWidth - 40) / 1.777;
  }

  addFavoriteVideo(videoId: string) {
    this.favoritesService.addFavoriteVideo(videoId).subscribe(res => {
      console.log('added video', res);
    })
  }

  removeFavoriteVideo(videoId: string) {
    this.favoritesService.removeFavoritedVideo(videoId).subscribe(res => {
      console.log('removed video video', res);
    })
  }

  async openPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: TrainingPlansPopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      componentProps: {
        videoId: this.videoId
      }
    });

    return await popover.present();
  }

  progress(ev: string) {
    console.log('progress', ev);
    this.progressDownload.next(ev);
  }

  async openDownloadOptions(item: any, fileName: number) {
    try {
      this.isPopUp = true;
      // console.log('open', fileUrl, fileName);
      const { download: downloadLinks, name: title, pictures } = await this.vimeoService.getLinks(fileName);
      console.log('download', downloadLinks);
      const data = {
        title,
        pictures,
      }
      
      const alert = await this.alertController.create({
        header: 'Select Quality From below',
        buttons: [{
          text: 'Download',
          role: 'confirm',
          handler: (response) => {
            // console.log(response, fileUrl, fileName);
            this.download(response, fileName, data);
          }
        }],
        inputs: downloadLinks
          .filter(list => list.public_name == '240p' ? false : true)
          .map(downloadLink => {
            const { quality, public_name, link, size } = downloadLink;
            return { label: `${quality.toUpperCase()} ${public_name.toUpperCase()} - ${(size/(1024 * 1024)).toFixed(0)} MB `, type: 'radio', value: link }
          })
      });
  
      await alert.present();
      console.log(alert);
      const { role } = await alert.onDidDismiss();
      // if (role === 'backdrop')
      this.isPopUp = false;
    } catch (error) {
      console.log('Something went wrong');
    }
  }

  async cancelDownload(): Promise<void> {
    const alert = await this.alertController.create(this.cancelOptions);

    await alert.present();
  }

  async download(type: string, fileName: number, data: any) {
    try {
      this.downloadError = false;
      this.progressDownload.next('0')
      this.isDownloading = true;
      const { 1: urlString, 2: contentId } = this.router.url.split('/');
      console.log('contentId', contentId);
      this.downloaded = await this.vimeoService.getAndDownload(fileName, type, this.progressDownload, urlString, contentId, data);
      // this.downloadV.emit(fileName);
    } catch (error) {
      // this.isDownloading = false;
      this.downloaded = false;
      this.downloadError = true;
    }
  }
}
