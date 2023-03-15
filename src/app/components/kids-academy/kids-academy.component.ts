import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { PageService } from 'src/app/services/page.service';
import { TagsService } from 'src/app/services/tags.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-kids-academy',
  templateUrl: './kids-academy.component.html',
  styleUrls: ['./kids-academy.component.scss'],
})
export class KidsAcademyComponent implements OnInit {
  kidsAcademyItems: any = [];
  planCategories: any = [];
  displayCount: number = 5;
  currentPage: number = 1;
  pageCategories = ['Level 1', 'Level 2', 'Level 3'];
  selectedPageCategories: any = {};
  categoriesByName: any = {};

  latestLevel1: any;
  latestLevel2: any;
  latestLevel3: any;
  loading: any;
  isLoading: boolean;

  filteredKidsAcademy: any = [];
  allFiltered: any = [];

  constructor(
    private userService: UserService,
    private pageService: PageService,
    private tagsService: TagsService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.loadFromCache();
    this.userService.getMe().subscribe(res => {

      if(!this.pageService.mainPages['kids-academy']) {
        this.pageService.getPageBySlug('kids-academy').subscribe(res => {
          this.pageService.mainPages['kids-academy'] = res[0];

          this.initPages();
        })
      } else {
        this.initPages();
      }      
    });

    this.tagsService.getCategories().subscribe((res: Array<any>) => {
      for(let cat of res) {
        this.categoriesByName[cat.name] = cat;
      }

      window.localStorage.setItem('categoriesByName', JSON.stringify(this.categoriesByName));
    });
  }

  doRefresh(event) {
    this.initPages();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  initPages() {
    this.pageService.getPageByParent(this.pageService.mainPages['kids-academy'].id, this.currentPage, 50)
    .subscribe((res: any) => {
      this.kidsAcademyItems = [];
      
      let latestDate = window.localStorage.getItem('latestCreatedKidsAcademy');
      if(latestDate != res[0].date) {
        window.localStorage.setItem('latestCreatedKidsAcademy', res[0].date);
        this.startLoading();
      }

      this.kidsAcademyItems = [];
      this.latestLevel3 = [];
      this.latestLevel1 = [];
      this.latestLevel2 = [];
      
      for(let tp of res) {
        this.kidsAcademyItems.push(this.parseItem(tp));
      }
      
      this.applyFilters();

      setTimeout(() => this.stopLoading(), 500);

      window.localStorage.setItem('latestLevel3Academy', JSON.stringify(this.latestLevel3 ? this.latestLevel3 : []));
      window.localStorage.setItem('latestLevel1Academy', JSON.stringify(this.latestLevel1 ? this.latestLevel1 : []));
      window.localStorage.setItem('latestLevel2Academy', JSON.stringify(this.latestLevel2 ? this.latestLevel2 : []));
      window.localStorage.setItem('kidsAcademyItems', JSON.stringify(this.kidsAcademyItems ? this.kidsAcademyItems : []));
    })
  }

  toggleCategory(cat: string) {
    this.planCategories[cat] = !this.planCategories[cat];
    this.applyFilters();
  }

  togglePageCategory(cat: string) {
    const temp = this.categoriesByName[cat];
    this.selectedPageCategories[temp.id] = !this.selectedPageCategories[temp.id];
    this.applyFilters();
  }

  applyFilters() {
    let allPlanDeselected = true;
    let allPageDeselected = true;
    for(let i in this.planCategories) {
      if(this.planCategories[i]) {
        allPlanDeselected = false;
        break;
      }
    }

    for(let i in this.selectedPageCategories) {
      if(this.selectedPageCategories[i]) {
        allPageDeselected = false;
        break;
      }
    }

    this.allFiltered = this.kidsAcademyItems.filter(tp => {
      let tempRes = true;
      if(tp.excerpt.category) {
        tempRes = allPlanDeselected || this.planCategories[tp.excerpt.category];
      }

      tempRes = tempRes && (allPageDeselected || this.selectedPageCategories[tp.categories[0]]);
      return tempRes;
    });


    this.filteredKidsAcademy = this.allFiltered.slice(0, this.displayCount);
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

  /**
   * Parsing item so it is more readable and usable
   * @param item Item from back end
   */
  parseItem(item: any) {
    const temp: any = {};
    temp.id = item.id;
    temp.title = item.clean_title;
    temp.featured_image_src = item.featured_image_src;
    temp.categories = item.categories;

    try {
      temp.excerpt = this.pageService.parsePureExcerpt(item.pure_excerpt)
    } catch(e) {
      // Must not be the case at all
      temp.excerpt = {};
    }
    
    if(temp.excerpt.category) {      
      // Adding first 5 by any category
      switch (temp.excerpt.category) {
        case 'Level 1':
          if(!this.latestLevel1) {
            this.latestLevel1 = [temp];
          } else {
            if(this.latestLevel1.length < 5) {
              this.latestLevel1.push(temp);
            }
          }

          break;

        case 'Level 2':
          if(!this.latestLevel2) {
            this.latestLevel2 = [temp];
          } else {
            if(this.latestLevel2.length < 5) {
              this.latestLevel2.push(temp);
            }
          }

          break;

        case 'Level 3':
          if(!this.latestLevel3) {
            this.latestLevel3 = [temp];
          } else {
            if(this.latestLevel3.length < 5) {
              this.latestLevel3.push(temp);
            }
          }

          break;
      }
    }

    return temp;
  }


  loadMore() {
    this.displayCount += 5;
    this.applyFilters();
    
    if(this.displayCount == this.kidsAcademyItems.length) {
      this.currentPage++;
      this.initPages();
    }
  }

  isCatSelected(cat: string) {
    if(!this.categoriesByName[cat]) {
      return ;
    }
    
    return this.selectedPageCategories[this.categoriesByName[cat].id];
  }

  async loadFromCache() {
    await this.startLoading();
    let temp = window.localStorage.getItem('categoriesByName');
    if(temp) {
      this.categoriesByName = JSON.parse(temp);
    }
    
    try {
      this.kidsAcademyItems = window.localStorage.getItem('kidsAcademyItems');
      this.kidsAcademyItems = this.kidsAcademyItems ? JSON.parse(this.kidsAcademyItems) : [];
      this.applyFilters();

      this.latestLevel3 = window.localStorage.getItem('latestLevel3Academy');
      this.latestLevel3 = this.latestLevel3 ? JSON.parse(this.latestLevel3) : [];

      this.latestLevel2 = window.localStorage.getItem('latestLevel2Academy');
      this.latestLevel2 = this.latestLevel2 ? JSON.parse(this.latestLevel2) : [];

      this.latestLevel1 = window.localStorage.getItem('latestLevel1Academy');
      this.latestLevel1 = this.latestLevel1 ? JSON.parse(this.latestLevel1) : [];

      if(this.kidsAcademyItems && this.kidsAcademyItems.length) {
        await this.stopLoading();
      }
    } catch(e) {
      await this.stopLoading();
    }    
  }

}
