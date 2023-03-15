import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { PageService } from 'src/app/services/page.service';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss'],
})
export class PodcastsComponent implements OnInit {

  podcasts: any = [];
  planCategories: any = [];
  displayCount: number = 5;
  currentPage: number = 1;

  latestPodcasts: any;
  isInLatest: any = {};
  loading: any;
  isLoading: boolean;

  filteredPodcasts: any = [];

  constructor(
    private userService: UserService,
    private pageService: PageService,
    private loadingCtrl: LoadingController,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.initInternalCalls();
  }

  doRefresh(event) {
    this.initPages();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async initInternalCalls() {
    try {
      this.startLoading();
      const res = await this.userService.currentUser();

      if(!this.pageService.mainPages['tv-podcasts']) {
        this.pageService.getPageBySlug('tv-podcasts').subscribe(async (res) => {
          this.pageService.mainPages['tv-podcasts'] = res[0];
          await this.initPages();
        })
      } else {
        await this.initPages();
      }
    } catch (e) {
      await this.loadFromCache();
      console.log(e.message);
    }
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

  async initPages() {
    await this.startLoading();
    try {
      [this.filteredPodcasts, this.latestPodcasts] = await this.sharedService.getPodcasts(this.pageService, this.displayCount, this.currentPage);
      setTimeout(() => this.stopLoading(), 500);
    } catch (error) {
      this.loadFromCache();
      setTimeout(() => this.stopLoading(), 500);
    }
  }

  toggleCategory(cat: string) {
    this.planCategories[cat] = !this.planCategories[cat];
    this.applyFilters();
  }

  applyFilters() {
    this.filteredPodcasts = this.podcasts.slice(0, this.displayCount);
  }

  loadMore() {
    this.displayCount += 5;
    this.applyFilters();
    
    if(this.displayCount == this.podcasts.length) {
      this.currentPage++;
      this.initPages();
    }
  }

  async loadFromCache() {
    try {
      await this.startLoading();
      this.podcasts = window.localStorage.getItem('podcasts');
      this.podcasts = this.podcasts ? JSON.parse(this.podcasts) : [];
      this.filteredPodcasts = this.podcasts.slice(0, this.displayCount);

      this.latestPodcasts = window.localStorage.getItem('latestPodcasts');
      this.latestPodcasts = this.latestPodcasts ? JSON.parse(this.latestPodcasts) : [];

      window.localStorage.removeItem('latestPodcasts');

    
      for(let temp of this.latestPodcasts) {
        this.isInLatest[temp.id] = true;
      }

      if(this.podcasts && this.podcasts.length) {
        await this.stopLoading();
      }
    } catch(e) {
      await this.stopLoading();
    }    
  }

}
