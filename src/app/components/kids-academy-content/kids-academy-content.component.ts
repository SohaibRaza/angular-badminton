import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { CachingService } from 'src/app/services/caching.service';
import { FavoritesService } from 'src/app/services/favorites.service';
import { PageService } from 'src/app/services/page.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-kids-academy-content',
  templateUrl: './kids-academy-content.component.html',
  styleUrls: ['./kids-academy-content.component.scss'],
})
export class KidsAcademyContentComponent implements OnInit {
  sections: any;
  pageId: any;
  pageExcerpt: any;
  pageInfo: any;
  latestKidsAcademies: any = [];
  loading: any;
  isLoading: boolean;

  constructor(
    private pageService: PageService,
    private activeRouter: ActivatedRoute,
    public favoritesService: FavoritesService,
    public loadingCtrl: LoadingController,
    public cachingService: CachingService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(res => {
      this.pageId = res.id;
      const kidsAcademyId = 'kidsAcademySections' + this.pageId;
      this.loadFromCache();

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
      });


      this.pageService.getPageByParent(res.id, 1, 50).subscribe(async (res: any) => {
        if(res[0]) {
          if (this.cachingService.notChangedSince(res, kidsAcademyId + 'date')) {
            this.stopLoading();
            return ;
          }
        }

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
        
        const cacheLatest = await this.storageService.get('latestKidsAcademies');
        this.latestKidsAcademies = cacheLatest ? JSON.parse(cacheLatest) : [];
        setTimeout(async () => await this.stopLoading(), 800);
        window.localStorage.setItem(kidsAcademyId, JSON.stringify(this.sections))
      })
    });
  }

  addFavoritePage() {
    this.favoritesService.addFavoritePage(this.pageId, {
      pageType: 'kids-academy',
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
    const kidsAcademyId = 'kidsAcademySections' + this.pageId;
    
    if(window.localStorage.getItem(kidsAcademyId)) {
      this.sections = JSON.parse(window.localStorage.getItem(kidsAcademyId));
    }

    if(window.localStorage.getItem('page' + this.pageId)) {
      this.pageInfo = JSON.parse(window.localStorage.getItem('page' + this.pageId));
    }

    this.latestKidsAcademies = window.localStorage.getItem('latestKidsAcademies');
    this.latestKidsAcademies = this.latestKidsAcademies ? JSON.parse(this.latestKidsAcademies) : [];    
    if (!this.latestKidsAcademies || !this.latestKidsAcademies.length) {
      const cacheLatest = await this.storageService.get('latestKidsAcademies');
      this.latestKidsAcademies = cacheLatest ? JSON.parse(cacheLatest) : [];
    }
    
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
