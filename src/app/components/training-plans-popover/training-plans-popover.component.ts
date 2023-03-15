import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController, PopoverController, ToastController } from '@ionic/angular';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-training-plans-popover',
  templateUrl: './training-plans-popover.component.html',
  styleUrls: ['./training-plans-popover.component.scss'],
})
export class TrainingPlansPopoverComponent implements OnInit {
  planForm: any = {};
  loading: boolean = false;
  @Input() videoId: string;
  
  constructor(
    public favoriteService: FavoritesService,
    public toast: ToastController,
    public formBuilder: FormBuilder,
    public popoover: PopoverController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.planForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  async createPlan() {
    const alert = await this.alertController.create({
      header: 'Enter plan name',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Plan name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Ok',
          handler: (res) => {
            if(!res.name) {
              return ;
            }

            console.log(res);

            this.loading = true;

            this.favoriteService.addPlaylist(res.name).subscribe(res => {
              this.planForm.controls.name.setValue('');
              this.favoriteService.getPlaylists().subscribe(res => {
                this.loading = false;
              })
            }, err => {
              this.loading = false;
            });

          }
        }
      ]
    });

    await alert.present();

    
  }

  selectPlan(id: string) {
    if(this.favoriteService.playlistsById[id].videoIds.includes(this.videoId)) {
      this.popoover.dismiss();
      console.log(this.favoriteService.playlistsById[id]);
      return ;
    }
    this.favoriteService.addVideoToPlaylist(this.videoId, id).subscribe(async res => {

      const toastOps: any = {
        color: 'success',
        position: 'bottom',
        duration: 2500,
        message: 'Video is added to the playlist',
      };      

      const toast = await this.toast.create(toastOps);

      toast.present();

      this.loading = false;
    });

    this.popoover.dismiss();
  }

}
