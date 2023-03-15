import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { CachingService } from 'src/app/services/caching.service';
import { PageService } from 'src/app/services/page.service';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.scss'],
})
export class WhatsNewComponent implements OnInit {
  categoriesByName: any = {};
  currentCat: string = 'Newest';
  allRecords: any = [];
  currentPage: number = 1;
  records: any = [];
  displayCount: number = 20;
  loading: any;
  isLoading: boolean;
  refreshEvent: any;

  constructor(
    public tagsService: TagsService,
    public pageService: PageService,
    private loadingCtrl: LoadingController,
    private cacheService: CachingService
  ) { }

  ngOnInit() {
    this.startLoading();
    this.tagsService.getCategories().subscribe((res: Array<any>) => {
      for(let cat of res) {
        this.categoriesByName[cat.name] = cat;
      }

      window.localStorage.setItem('categoriesByName', JSON.stringify(this.categoriesByName));
      this.initCategory();

    }, err => this.loadFromCache());
  }

  doRefresh(event) {
    this.refreshEvent = event;
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
    this.initCategory();
    
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

  async loadFromCache() {
    const temp = window.localStorage.getItem('categoriesByName');
    if(temp) {
      this.categoriesByName = JSON.parse(temp);
    }

    this.initCategory();
  }

  async initCategory() {

    if(!this.categoriesByName[this.currentCat]) {
      return ;
    }

    if(this.refreshEvent && this.refreshEvent.target) {
      this.refreshEvent.target.complete();
    }


    let temp = window.localStorage.getItem('latestRecordsByCat' + this.categoriesByName[this.currentCat].id);
    if(temp) {
      this.allRecords = JSON.parse(temp);
      this.applyFilters();
    }

    this.pageService.getPagesByQuery({
      categories: this.categoriesByName[this.currentCat].id,
    }, this.currentPage, 100).subscribe((res: any) => {
      if(this.cacheService.notChangedSince(res, 'whatsNewLatest')) {
        this.stopLoading();
        return ;
      }
      
      const tempRecords = [];
      this.allRecords = [];
      
      for(let record of res) {
        record.parent = {
          id: this.pageService.mainPagesById[record.parent]?.id,
          slug: this.pageService.mainPagesById[record.parent]?.slug,
          clean_title: this.pageService.mainPagesById[record.parent]?.clean_title,
        };
        
        let tempExcerpt = {};
        try {
          tempExcerpt = this.pageService.parsePureExcerpt(record.pure_excerpt);
        } catch(e) {
          console.log('Error with excerpt', record.id);
        }
        
        const temp = {
          parent: record.parent,
          clean_title: record.clean_title,
          id: record.id,
          excerpt: tempExcerpt,
          featured_image_src: record.featured_image_src
        }

        tempRecords.push(temp);
      }
      
      this.allRecords = tempRecords;
      this.applyFilters();

      setTimeout(() => this.stopLoading(), 500);

      window.localStorage.setItem('latestRecordsByCat' + this.categoriesByName[this.currentCat].id, 
                            JSON.stringify(this.allRecords));
    }, err => this.stopLoading());
  }

  applyFilters() {
    this.records = this.allRecords.slice(0, this.displayCount);
  }

  loadMore() {
    this.displayCount += 5;

    this.applyFilters();
    if(this.displayCount == this.allRecords) {
      this.currentPage++;
      this.initCategory();
    }
  }
}
