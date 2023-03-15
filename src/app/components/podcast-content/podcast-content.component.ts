import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ReplaySubject } from 'rxjs';
import { CachingService } from 'src/app/services/caching.service';
import { FavoritesService } from 'src/app/services/favorites.service';
import { PageService } from 'src/app/services/page.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-podcast-content',
  templateUrl: './podcast-content.component.html',
  styleUrls: ['./podcast-content.component.scss'],
})
export class PodcastContentComponent implements OnInit {
  sections: any;
  asyncSections: ReplaySubject<any> = new ReplaySubject<any>();
  pageId: any;
  pageExcerpt: any;
  pageInfo: any;
  latestPodcasts: any = [];
  loading: any;
  isLoading: boolean;
  podcastId: any;

  constructor(
    private pageService: PageService,
    private activeRouter: ActivatedRoute,
    public favoritesService: FavoritesService,
    public loadingCtrl: LoadingController,
    public cachingService: CachingService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(async res => {
      await this.startLoading();
      this.podcastId = 'podcastSections' + res.id;
      this.pageId = res.id;


      const cacheLatest = await this.storageService.get('latestPodcasts');
      this.latestPodcasts = cacheLatest? JSON.parse(cacheLatest) : [];


      this.pageService.getSinglePage(res.id).subscribe((res: any) => {
        try {
          this.pageExcerpt = this.pageService.parsePureExcerpt(res.pure_excerpt);
        } catch(e) {
          this.pageExcerpt = {};
        }
        
        this.pageInfo = {
          clean_title: res.clean_title,
          pure_excerpt: res.pure_excerpt,
          id: res.id
        };
        try {
          this.pageInfo.excerpt = this.pageService.parsePureExcerpt(this.pageInfo.pure_excerpt);
        } catch(e) {}
        window.localStorage.setItem('page' + this.pageId, JSON.stringify(this.pageInfo));
      }, err => {
        this.loadFromCache();
        if(window.localStorage.getItem('page' + this.pageId)) {
          this.pageInfo = JSON.parse(window.localStorage.getItem('page' + this.pageId));
        }
      });


      this.pageService.getPageByParent(res.id, 1, 50).subscribe(async (res: any) => {
        if (this.cachingService.notChangedSince(res, this.podcastId + 'date')) {
          this.loadFromCache();
          this.stopLoading();
          return ;
        }

        await this.startLoading();

        res = res.sort((a,b) => {
          return a.title.rendered > b.title.rendered ? 1 : -1;
        });
        
        this.sections = [];

        for(let item of res) {
          const temp: any = {};
          try {
            temp.excerpt = this.pageService.parsePureExcerpt(item.pure_excerpt)
          } catch(e) {
            // Must not be the case at all
            temp.excerpt = {};
          }

          temp.content = item.content.rendered;
          this.sections.push(temp);
        }

        this.asyncSections.next(this.sections);
        
        setTimeout(() => this.stopLoading(), 800);
        window.localStorage.setItem(this.podcastId, JSON.stringify(this.sections))
      }, err => {
        this.stopLoading();
        this.loadFromCache();
      })
    });
  }

  addFavoritePage() {
    this.favoritesService.addFavoritePage(this.pageId, {
      pageType: 'podcasts',
      title: this.pageInfo.clean_title,
      ...this.pageExcerpt
    }).subscribe(res => {
      console.log(res);
    });
  }

  removeFavoritePage() {
    this.favoritesService.removeFavoritePage(this.pageId).subscribe(res => {
      console.log(res);
    });
  }

  async loadFromCache() {
    await this.startLoading();
    const info = window.localStorage.getItem('page' + this.pageId);
    if(info) {
      this.pageInfo = JSON.parse(info);
    }

    if(window.localStorage.getItem(this.podcastId)) {
      this.sections = JSON.parse(window.localStorage.getItem(this.podcastId));
    }

    this.latestPodcasts = window.localStorage.getItem('latestPodcasts');
    this.latestPodcasts = this.latestPodcasts ? JSON.parse(this.latestPodcasts) : [];

    if (!this.latestPodcasts || !this.latestPodcasts.length) {
      const cacheLatest = await this.storageService.get('latestPodcasts');
      this.latestPodcasts = cacheLatest? JSON.parse(cacheLatest) : [];
    }
    
    if (this.sections.length) this.asyncSections.next(this.sections);
    if(this.sections) {
      setTimeout(async () => await this.stopLoading(), 800);
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

}
