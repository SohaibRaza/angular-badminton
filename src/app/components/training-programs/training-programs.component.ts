import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { PageService } from 'src/app/services/page.service';
import { TagsService } from 'src/app/services/tags.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-training-programs',
  templateUrl: './training-programs.component.html',
  styleUrls: ['./training-programs.component.scss'],
})
export class TrainingProgramsComponent implements OnInit {
  trainingPrograms: any = [];
  planCategories: any = [];
  categoryNames: any = ['Beginner', 'Intermediate', 'Advanced'];;
  displayCount: number = 5;
  currentPage: number = 1;
  pageCategories = [{ name: 'Singles' }, { name: 'Doubles' }, { name: 'Mixed doubles' } ];
  selectedPageCategories: any = {};
  categoriesByName: any = {};

  latestBeginner: any;
  latestIntermediate: any;
  latestAdvanced: any;
  isInLatest: any = {};
  loading: any;
  isLoading: boolean;

  filteredTrainingPrograms: any = [];
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

      if(!this.pageService.mainPages['training-programs']) {
        this.pageService.getPageBySlug('training-programs').subscribe(res => {
          this.pageService.mainPages['training-programs'] = res[0];

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
    this.pageService.getPageByParent(this.pageService.mainPages['training-programs'].id, this.currentPage, 50)
    .subscribe((res: any) => {
      window.localStorage.removeItem('latestBeginnerTraining');
      window.localStorage.removeItem('latestIntermediateTraining');
      window.localStorage.removeItem('latestAdvancedTraining');

      let latestDate = window.localStorage.getItem('latestCreatedTrainingProgram');
      if(latestDate != res[0].date) {
        window.localStorage.setItem('latestCreatedTrainingProgram', res[0].date);
        this.startLoading();
      }

      this.trainingPrograms = [];
      this.latestAdvanced = [];
      this.latestBeginner = [];
      this.latestIntermediate = [];
      for(let tp of res) {
        this.trainingPrograms.push(this.parseItem(tp));
      }

      this.applyFilters();
      
      setTimeout(() => this.stopLoading(), 500);
      window.localStorage.setItem('latestAdvancedTraining', JSON.stringify(this.latestAdvanced));
      window.localStorage.setItem('latestBeginnerTraining', JSON.stringify(this.latestBeginner));
      window.localStorage.setItem('latestIntermediateTraining', JSON.stringify(this.latestIntermediate));
      window.localStorage.setItem('trainingPrograms', JSON.stringify(this.trainingPrograms));
    })
  }

  toggleCategory(cat: string) {
    this.planCategories[cat] = !this.planCategories[cat];
    this.applyFilters();
  }

  togglePageCategory(cat: string) {
    const temp = this.categoriesByName[cat];
    this.selectedPageCategories[temp.id] = !this.selectedPageCategories[temp.id];
    console.log(temp, cat, this.selectedPageCategories);
    this.applyFilters();
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

    if(this.categoryNames.length == 0 || (allPageDeselected && allPlanDeselected)) {
      this.allFiltered = this.trainingPrograms;
      this.filteredTrainingPrograms = this.allFiltered.slice(0, this.displayCount);
      return;
    }

    this.allFiltered = this.trainingPrograms.filter(tp => {
      let tempRes = true;
      if(tp.excerpt.category) {
        tempRes = allPlanDeselected || this.planCategories[tp.excerpt.category];
      }
      const isExist = this.findIfExists(this.selectedPageCategories, tp.categories);
      console.log(tempRes, tp.title, tp.categories, this.selectedPageCategories);

      tempRes = tempRes && (allPageDeselected || isExist);
      return tempRes;
    });

    this.filteredTrainingPrograms = this.allFiltered.slice(0, this.displayCount);
  }

  findIfExists(obj: any, arr: any[]) {
    const keys = Object.keys(obj);
    const res = keys.filter(key => {
      const index = arr.findIndex(x => x == key && obj[key]);
      if (index !== -1) { return true; }
      else { return false; }
    });
    if (res.length) return true;
    return false;
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
      // Adding first 3 by any category
      switch (temp.excerpt.category) {
        case 'Beginner':
          if(!this.latestBeginner) {
            this.latestBeginner = [temp];
          } else {
            if(this.latestBeginner.length < 5) {
              this.latestBeginner.push(temp);
            }
          }

          break;

        case 'Intermediate':
          if(!this.latestIntermediate) {
            this.latestIntermediate = [temp];
          } else {
            if(this.latestIntermediate.length < 5) {
              this.latestIntermediate.push(temp);
            }
          }

          break;

        case 'Advanced':
          if(!this.latestAdvanced) {
            this.latestAdvanced = [temp];
          } else {
            if(this.latestAdvanced.length < 5) {
              this.latestAdvanced.push(temp);
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

    if(this.displayCount == this.allFiltered.length) {
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

    this.trainingPrograms = window.localStorage.getItem('trainingPrograms');
    this.trainingPrograms = this.trainingPrograms ? JSON.parse(this.trainingPrograms) : [];
    this.applyFilters();

    this.latestAdvanced = window.localStorage.getItem('latestAdvancedTraining');
    this.latestAdvanced = this.latestAdvanced ? JSON.parse(this.latestAdvanced) : [];

    this.latestIntermediate = window.localStorage.getItem('latestIntermediateTraining');
    this.latestIntermediate = this.latestIntermediate ? JSON.parse(this.latestIntermediate) : [];

    this.latestBeginner = window.localStorage.getItem('latestBeginnerTraining');
    this.latestBeginner = this.latestBeginner ? JSON.parse(this.latestBeginner) : [];

    if(this.trainingPrograms && this.trainingPrograms.length) {
      await this.stopLoading();
    }
  }
}
