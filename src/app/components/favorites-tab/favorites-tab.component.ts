import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'favorites-tab',
  templateUrl: './favorites-tab.component.html',
  styleUrls: ['./favorites-tab.component.scss'],
})
export class FavoritesTabComponent implements OnInit {
  favoriteVideos: any = [];
  favoritePages: any = [];
  loading: any;
  isLoading: boolean;
  pageNames: any = {
    'training-programs': 'Training Program',
    'tactical-lessons': 'Tactical Lesson',
    'physical-programs': 'Phiscal Program',
    'mental-courses': 'Mental Courses',
    'podcasts': 'Podcast',
    'kids-academy': 'Kids Academy'
  }

  constructor(
    public favoritesService: FavoritesService,
    public loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    // this.loadFromCache();
    this.startLoading();
    this.favoritesService.getFavorites().subscribe((res: any) => {
      this.favoriteVideos = [];
      this.favoritePages = [];
      
      for(let item of res) {
        if(item.additional_info) {
          item.additionalInfo = JSON.parse(item.additional_info);
        }

        if(item.entity_type == 'video') {
          this.favoriteVideos.push(item);
        } else {
          this.favoritePages.push(item);
        }
      }
      setTimeout(() => this.stopLoading(), 500);
    })
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

  loadFromCache() {
    let tempVideos = window.localStorage.getItem('favoriteVideos');

    if(tempVideos) {
      this.favoriteVideos = JSON.parse(tempVideos);
    }

    let tempPages = window.localStorage.getItem('favoritePages');
    if(tempVideos) {
      this.favoritePages = JSON.parse(tempPages);
    }
  }

}
