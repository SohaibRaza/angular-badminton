import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'plans-tab',
  templateUrl: './plans-tab.component.html',
  styleUrls: ['./plans-tab.component.scss'],
})
export class PlansTabComponent implements OnInit {
  planForm: any = {};
  selectedPlan: any = '';
  editMode: boolean = false;
  createMode: boolean = false;
  currentVideos: any = [];
  videoComments: any = {};
  loading: any;
  isLoading: boolean;

  constructor(
    public favoriteService: FavoritesService,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {}

  async ngOnInit() {
    // this.loadFromCache();
    await this.startLoading();
    this.planForm = this.formBuilder.group({
      name: ['', Validators.required]
    });

    this.favoriteService.getPlaylists().subscribe(async res => {
      // just in case if this function wasn't already been called by main component
      if(this.favoriteService.playlists.length) {
        this.selectedPlan = this.favoriteService.playlists[0].id;
      }

      this.stopLoading();
      
    }, error => {
      this.stopLoading();
    });
  }

  async startLoading() {
    if(this.loading) {
      // Just in case loading is still opened
      return ;
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
    this.loading = null;
  }

  async createPlan() {
    if(!this.planForm.value.name || this.isLoading) {
      return ;
    }

    await this.startLoading();

    this.favoriteService.addPlaylist(this.planForm.value.name).subscribe(async (res: any) => {
      await this.stopLoading();
      this.favoriteService.playlists.push(res);
      this.planForm.controls.name.setValue('');
      this.createMode = false;
      this.selectedPlan = res.id;
      this.currentVideos = [];
      this.favoriteService.getPlaylists().subscribe(res => {
        
      });
    }, async err => {
      await this.stopLoading();
      this.isLoading = false;
    })
  }

  loadFromCache() {
    const tempPlaylists = window.localStorage.getItem('playlists');

    if(tempPlaylists) {
      this.favoriteService.playlists = JSON.parse(tempPlaylists);
      if(this.favoriteService.playlists.length) {
        this.selectedPlan = this.favoriteService.playlists[0].id;
      }
      
    }
  }

  async removePlan() {
    let alert = await this.alertCtrl.create({
      message: 'Do you want to remove this plan?',
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
            this.favoriteService.removePlaylist(this.selectedPlan).subscribe(async res => {
              this.favoriteService.playlists = this.favoriteService.playlists.filter((plan) => {
                return plan.id != this.selectedPlan;
              });
        
              window.localStorage.setItem('playlists', JSON.stringify(this.favoriteService.playlists));
              if(this.favoriteService.playlists.length) {
                this.selectedPlan = this.favoriteService.playlists[0].id;
              } else {
                this.selectedPlan = '';
              }
              
              this.currentVideos = [];
            });
          }
        }
      ]
    });

    alert.present();
  }

  setEditMode(mode: boolean) {
    this.editMode = mode;
    const tempPLan = this.favoriteService.playlists.find(a => a.id == this.selectedPlan);
    this.planForm.patchValue({
      name: tempPLan.name
    })
    this.createMode = false;
  }

  setCreateMode(mode: boolean) {
    this.createMode = mode;
    this.editMode = false;
  }

  async editPlan() {
    if(!this.planForm.value.name || this.isLoading) {
      return ;
    }

    const name = this.planForm.value.name;
    await this.startLoading();
    
    this.favoriteService.editPlaylist(this.selectedPlan, name).subscribe(res => {
      const temp = this.selectedPlan;
      this.selectedPlan = '';
      this.stopLoading();

      for(let i in this.favoriteService.playlists) {
        if(this.favoriteService.playlists[i].id == temp) {
          this.favoriteService.playlists[i].name = name;
          this.selectedPlan = temp;
        }
      };
      this.setEditMode(false);
    }, err => {
      this.isLoading = false;
    })
  }

  async selectPlan() {
    await this.startLoading();

    this.favoriteService.getVideosOfPlaylist(this.selectedPlan).subscribe(async (res: any) => {
      this.currentVideos = res.sort((a,b) => parseInt(a.order_number) > parseInt(b.order_number) ? 1 : -1);
      setTimeout(() => this.stopLoading(), 1000);
      window.localStorage.setItem('plan' + this.selectedPlan, JSON.stringify(this.currentVideos));
    }, error => {
      this.stopLoading();
    });
  }

  moveUp(num: number) {
    if(num == 0) {
      return ;
    }

    const temp = this.currentVideos[num];
    this.currentVideos[num] = this.currentVideos[num - 1];
    this.currentVideos[num - 1] = temp;
    this.updateOrder();
  }

  moveDown(num: number) {
    if(num == this.currentVideos.length - 1) {
      return ;
    }

    const temp = this.currentVideos[num];
    this.currentVideos[num] = this.currentVideos[num + 1];
    this.currentVideos[num + 1] = temp;
    this.updateOrder();
  }

  async updateOrder() {
    const promises = [];
    for(let i = 0; i < this.currentVideos.length; i++) {
      promises.push(this.favoriteService.editVideoOrder(this.currentVideos[i].id, i).toPromise());
    }

    await Promise.all(promises);
    
    window.localStorage.setItem('plan' + this.selectedPlan, JSON.stringify(this.currentVideos));

    console.log('order is updated');
  }
}
