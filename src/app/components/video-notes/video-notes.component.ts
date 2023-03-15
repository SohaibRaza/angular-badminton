import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'video-notes',
  templateUrl: './video-notes.component.html',
  styleUrls: ['./video-notes.component.scss'],
})
export class VideoNotesComponent implements OnInit, AfterViewInit {
  @Input() videoData: any;
  @Input() planData: any;
  
  @Output() planChanged: EventEmitter<any> = new EventEmitter();
  @Output() moveUp: EventEmitter<any> = new EventEmitter();
  @Output() moveDown: EventEmitter<any> = new EventEmitter();

  @ViewChild('text', {read: ElementRef}) textarea: ElementRef;

  planForm: any;
  loadingObj: any;

  constructor(
    public favoriteService: FavoritesService,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private loading: LoadingController,
    private toast: ToastController
  ) {
    this.planForm = this.formBuilder.group({
      videoNote: ['']
    });
  }

  async ngOnInit() {
    this.loadingObj = await this.loading.create();
    
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.textChanged({
        target: this.textarea.nativeElement
      });
    }, 500)
    
  }

  async deleteVideoFromPlan() {
    let alert = await this.alertCtrl.create({
      message: 'Do you want to remove this video from plan?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.loadingOn();
            this.favoriteService.removeVideoFromPlaylist(this.videoData.id).subscribe(res => {
              this.planChanged.emit();
              setTimeout(() => this.loadingOff(), 1500);
            });
          }
        }
      ]
    });

    alert.present();
  }

  emitMoveUp() {
    this.moveUp.emit();
  }

  emitMoveDown() {
    this.moveDown.emit();
  }

  async loadingOn() {
    this.loadingObj.present();    
  }

  async loadingOff() {
    this.loadingObj.dismiss();
  }

  async saveNote() {
    this.loadingObj.present();

    this.favoriteService.editVideoNote(this.videoData.id, this.planForm.value.videoNote).subscribe(async (res) => {
      this.loadingObj.dismiss();
      const toastOps: any = {
        color: 'success',
        position: 'bottom',
        duration: 2500,
        message: 'Saved!'
      }
      
      const toast = await this.toast.create(toastOps);

      toast.present();
    })
  }

  textChanged(ev: any) {
    ev.target.style.height = ev.target.scrollHeight + 'px';
  }

}
