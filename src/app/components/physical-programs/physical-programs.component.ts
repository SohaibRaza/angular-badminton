import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { PageService } from 'src/app/services/page.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-physical-programs',
  templateUrl: './physical-programs.component.html',
  styleUrls: ['./physical-programs.component.scss'],
})
export class PhysicalProgramsComponent implements OnInit {
  physicalPrograms: any = [];
  planCategories: any = [];
  
  displayCount: number = 5;
  currentPage: number = 1;
  loading: any;
  isLoading: boolean;

  latestPhysical: any;

  filteredPhysicalPrograms: any = [];

  constructor(
    private userService: UserService,
    private pageService: PageService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.startLoading();
    this.userService.getMe().subscribe(res => {

      if(!this.pageService.mainPages['physical']) {
        this.pageService.getPageBySlug('physical').subscribe(res => {
          this.pageService.mainPages['physical'] = res[0];

          this.initPages();
        })
      } else {
        this.initPages();
      }      
    }, err => {
      this.loadFromCache();
    })
  }

  doRefresh(event) {
    this.initPages();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
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

  initPages() {
    this.pageService.getPageByParent(this.pageService.mainPages['physical'].id, this.currentPage, 50)
    .subscribe((res: any) => {
      this.physicalPrograms = [];
      this.latestPhysical = [];
      
      let latestDate = window.localStorage.getItem('latestCreatedPhysicalProgram');
      if(latestDate != res[0].date) {
        window.localStorage.setItem('latestCreatedPhysicalProgram', res[0].date);
        this.startLoading();
      }
      
      for(let tp of res) {
        this.physicalPrograms.push(this.parseItem(tp));
      }
      
      this.filteredPhysicalPrograms = this.physicalPrograms.slice(0, this.displayCount);
      setTimeout(() => this.stopLoading(), 500);
      window.localStorage.setItem('latestPhysical', JSON.stringify(this.latestPhysical ? this.latestPhysical : []));
      window.localStorage.setItem('physicalPrograms', JSON.stringify(this.physicalPrograms ? this.physicalPrograms : []));
    }, err => {
      this.loadFromCache();
    })
  }

  toggleCategory(cat: string) {
    this.planCategories[cat] = !this.planCategories[cat];
    this.applyFilters();
  }

  applyFilters() {
    this.filteredPhysicalPrograms = this.physicalPrograms.slice(0, this.displayCount);
    return;
  }

  /**
   * Parsing item so it is more readable and usable
   * @param item Item from back end
   */
  parseItem(item: any) {
    const temp: any = {};
    temp.id = item.id;
    temp.title = item.clean_title;
    temp.featured_image_src = item.featured_image_src;

    try {
      temp.excerpt = this.pageService.parsePureExcerpt(item.pure_excerpt)
    } catch(e) {
      // Must not be the case at all
      temp.excerpt = {};
    }
    
    if(temp.excerpt.category) {
      this.planCategories[temp.excerpt.category] = true;
    }

    if(!this.latestPhysical) {
      this.latestPhysical = [temp];
    } else {
      if(this.latestPhysical.length < 5) {
        this.latestPhysical.push(temp);
      }
    }

    return temp;
  }


  loadMore() {
    this.displayCount += 5;
    this.applyFilters();
    
    if(this.displayCount == this.physicalPrograms.length) {
      this.currentPage++;
      this.initPages();
    }
  }

  async loadFromCache() {
    try {
      await this.startLoading();
      this.physicalPrograms = window.localStorage.getItem('physicalPrograms');
      this.physicalPrograms = this.physicalPrograms ? JSON.parse(this.physicalPrograms) : [];
      this.filteredPhysicalPrograms = this.physicalPrograms.slice(0, this.displayCount);

      this.latestPhysical = window.localStorage.getItem('latestPhysical');
      this.latestPhysical = this.latestPhysical ? JSON.parse(this.latestPhysical) : [];
      
      if(this.physicalPrograms && this.physicalPrograms.length) {
        await this.stopLoading();
      }
    } catch(e) {
      await this.stopLoading();
    }    
  }

}
