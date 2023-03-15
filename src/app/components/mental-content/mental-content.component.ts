import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ReplaySubject } from 'rxjs';
import { CachingService } from 'src/app/services/caching.service';
import { FavoritesService } from 'src/app/services/favorites.service';
import { PageService } from 'src/app/services/page.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-mental-content',
  templateUrl: './mental-content.component.html',
  styleUrls: ['./mental-content.component.scss'],
})
export class MentalContentComponent implements OnInit {
  sections: any;
  asyncSections: ReplaySubject<any[]> = new ReplaySubject<any[]>();
  pageId: any;
  pageExcerpt: any;
  pageInfo: any;
  latestMentalCourses: any = [];
  loading: any;
  isLoading: boolean;
  mentalId: any;

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
      this.startLoading();
      this.mentalId = 'mentalSections' + res.id;
      this.pageId = res.id;

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
        if (this.cachingService.notChangedSince(res, this.mentalId + 'date')) {
          this.loadFromCache();
          this.stopLoading();
          return ;
        }
        
        this.startLoading();

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
        const cacheLatest = await this.storageService.get('latestMentalCourses');
        this.latestMentalCourses = cacheLatest ? JSON.parse(cacheLatest) : []
        setTimeout(() => this.stopLoading(), 800);
        
        window.localStorage.setItem(this.mentalId, JSON.stringify(this.sections))
      }, err => {
        this.loadFromCache();
      })

    });
  }

  addFavoritePage() {
    this.favoritesService.addFavoritePage(this.pageId, {
      pageType: 'mental-courses',
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

    if(window.localStorage.getItem(this.mentalId)) {
      this.sections = JSON.parse(window.localStorage.getItem(this.mentalId));
    }

    if(window.localStorage.getItem('page' + this.pageId)) {
      this.pageInfo = JSON.parse(window.localStorage.getItem('page' + this.pageId));
    }
    
    this.latestMentalCourses = window.localStorage.getItem('latestMentalCourses');
    this.latestMentalCourses = this.latestMentalCourses ? JSON.parse(this.latestMentalCourses) : [];

    if (!this.latestMentalCourses || !this.latestMentalCourses.length) {
      const cacheLatest = await this.storageService.get('latestMentalCourses');
      this.latestMentalCourses = cacheLatest ? JSON.parse(cacheLatest) : []
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
