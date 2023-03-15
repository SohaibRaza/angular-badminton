import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PageService } from 'src/app/services/page.service';
import { UserService } from 'src/app/services/user.service';
import { ToastController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss'],
})
export class TutorialsComponent implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  sections: any = [];
  mainCategories: any = [];
  currentPage: number = 1;
  selectedCategory: number;
  selectedCategoryName: string;
  loading: any;
  isLoading: boolean;
  showLoadMore: boolean = false;
  currentSectionsPage: number = 1;
  moreLoading: boolean = false;
  pageLoader: any;

  constructor(
    private userService: UserService,
    private pageService: PageService,
    private activatedRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private ngZone: NgZone,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (res) => {
      await this.startLoading();
      this.selectedCategory = parseInt(res.id, 10);
      // this.loadFromCache();

      this.userService.getLoggedUser().subscribe((res) => {
        if (!res) { return; }
        if(!this.pageService.mainPages['video-tutorials']) {
          this.pageService.getPageBySlug('video-tutorials').subscribe(res => {
            this.pageService.mainPages['video-tutorials'] = res[0];
            // this.stopLoading()
            this.initPages();
          });
        } else {
          // this.stopLoading()
          this.initPages();
        }
      }, err => this.stopLoading());
    }, err => this.stopLoading());    
  }

  async startLoading() {
    this.isLoading = true;
    if(this.loading) {
      // Just in case loading is still opened
      this.loading.dismiss();
    }
    this.loading = await this.loadingCtrl.create();

    this.loading.present();
    
  }

  async stopLoading() {
    if(!this.loading) {
      return ;
    }
    if (this.pageLoader) {
      this.pageLoader.target.complete();
      this.pageLoader = null;
    }
    this.loading.dismiss();
    this.isLoading = false;
  }

  async initPages() {
    // await this.startLoading();
    if (this.pageLoader) {
      this.selectCategory(true, false, true);
      return;
    }
    try {
      const res = await this.pageService.getPromiseParentPages(this.pageService.mainPages['video-tutorials'].id, this.currentPage, 50, {
        order: 'asc',
        orderby: 'menu_order'
      })
        
      const temp = [];
      for(let cat of res) {
        temp.push({
          clean_title: cat.clean_title,
          id: cat.id,
          featured_image: cat.featured_image
        });
      }
  
      this.mainCategories = temp;
  
      window.localStorage.setItem('mainVideoCategories', JSON.stringify(this.mainCategories));
      
      if (!this.selectedCategory)
        this.selectedCategory = this.mainCategories[0].id || null;
      if(this.selectedCategory) {
        // this.stopLoading();
        this.selectCategory(true, false, true);
        return;
      }
      this.stopLoading();
    } catch (error) {
      await this.stopLoading();
      this.throwExError();
    }
  }

  async loadFromCache() {
    const temp = window.localStorage.getItem('mainVideoCategories');
    if(temp) {
      this.mainCategories = JSON.parse(temp);

      
      if(this.selectedCategory) {
        this.selectCategory(true, true);
        return;
      }
      
      this.selectedCategory = this.mainCategories[0].id;
    }

    this.stopLoading()    
  }

  async selectCategory(isReset = true, loadFromCache = false, showLoadMore = false) {
    if (isReset) this.currentSectionsPage = 1;
    if (loadFromCache) {
      const temp = window.localStorage.getItem('videoSections' + this.selectedCategory);
      if(temp) {
        this.sections = JSON.parse(temp) as Array<any>;
        this.sections.splice(5, this.sections.length);
        this.stopLoading();
        return;
      }
    }

    try {
      const res = await this.pageService.getPromiseParentPages(this.selectedCategory, this.currentSectionsPage, 5)
        .catch(err => {
          this.stopLoading();
          this.throwExError();
        })
      let latestDate = window.localStorage.getItem('latestCreatedTutorials' + this.selectedCategory);
      if (res.length >= 5)
        this.showLoadMore = true;

      if(!res.length) {
        this.sections = [[], ...this.sections];
        this.showLoadMore = false;
        this.stopLoading();
        return;
      }

      if (res.length < 5) this.showLoadMore = false;
      this.moreLoading = false;

      if (isReset)
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
      
      setTimeout(() => {
        this.stopLoading();
        if (isReset)
          this.content.scrollToTop(400);
      }, 500);
      window.localStorage.setItem('videoSections' + this.selectedCategory, JSON.stringify(this.sections))
    } catch (error) {
      await this.stopLoading();
      this.throwExError();
    }
  }

  async throwExError() {
    const toast = await this.toast.create({
      color: 'danger',
      position: 'bottom',
      duration: 2500,
      message: 'Something bad happened. Please try again later / Restart the app.',
    });

    toast.present();
  }

  async changeCategory() {
    await this.startLoading();
    this.selectCategory();
  }
  
  async loadMore() {
    if (this.moreLoading) return;
    await this.startLoading();
    this.currentSectionsPage++;
    this.moreLoading = true;
    this.selectCategory(false);
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(async () => {
      
      console.log('Async operation has ended');
      window.localStorage.removeItem('videoSections');
      await this.startLoading();
      this.pageLoader = event;
      this.currentSectionsPage = 1;
      this.initPages();
    }, 1000);
  }

}
