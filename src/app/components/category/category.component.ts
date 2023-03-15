import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PageService } from 'src/app/services/page.service';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoriesByName: any = {};
  currentCat: string;
  records: any = [];
  allRecords: any = [];
  allFiltered: any = [];
  displayCount: number = 5;
  currentPage: number = 1;
  latestTactical: any = [];
  latestTraining: any = [];
  categoryNames: any = ['Beginner', 'Intermediate', 'Advanced'];
  planCategories: any = [];
  loading: any;
  isLoading: boolean;

  constructor(
    public activatedRoute: ActivatedRoute,
    public tagsService: TagsService,
    public pageService: PageService,
    public loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.startLoading();
    this.activatedRoute.params.subscribe(res => {
      this.currentCat = res.name;
    });

    this.tagsService.getCategories().subscribe((res: Array<any>) => {
      for(let cat of res) {
        this.categoriesByName[cat.name] = cat;
      }
      this.loadFromCache();

      window.localStorage.setItem('categoriesByName', JSON.stringify(this.categoriesByName));
    });
  }

  initCategory() {
    this.startLoading();
    if(!this.categoriesByName[this.currentCat]) {
      return ;
    }

    let temp = window.localStorage.getItem('latestTacticalByCat' + this.categoriesByName[this.currentCat].id);
    if(temp) {
      this.latestTactical = JSON.parse(temp);
    }

    temp = window.localStorage.getItem('latestTrainingByCat' + this.categoriesByName[this.currentCat].id);
    if(temp) {
      this.latestTraining = JSON.parse(temp);
    }

    temp = window.localStorage.getItem('latestRecordsByCat' + this.categoriesByName[this.currentCat].id);
    if(temp) {
      this.allRecords = JSON.parse(temp);
      this.applyFilters();
    }

    this.pageService.getPagesByQuery({
      categories: this.categoriesByName[this.currentCat].id,
    }, this.currentPage, 100).subscribe((res: any) => {
      const tempRecords = [];
      this.allRecords = [];
      this.latestTactical = [];
      this.latestTraining = [];
      
      for(let record of res) {
        record.parent = {
          id: this.pageService.mainPagesById[record.parent].id,
          slug: this.pageService.mainPagesById[record.parent].slug,
          clean_title: this.pageService.mainPagesById[record.parent].clean_title,
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

        if(temp.parent.slug == 'tactical-lessons') {
          if(this.latestTactical.length < 5) {
            this.latestTactical.push(temp);
          }
        }

        if(temp.parent.slug == 'training-programs') {
          if(this.latestTraining.length < 5) {
            this.latestTraining.push(temp);
          }
        }

        tempRecords.push(temp);
      }
      
      this.allRecords = tempRecords;
      this.applyFilters();

      this.stopLoading();

      window.localStorage.setItem('latestTrainingByCat' + this.categoriesByName[this.currentCat].id, 
                                  JSON.stringify(this.latestTraining));
      window.localStorage.setItem('latestTacticalByCat' + this.categoriesByName[this.currentCat].id, 
                                  JSON.stringify(this.latestTactical));
      window.localStorage.setItem('latestRecordsByCat' + this.categoriesByName[this.currentCat].id, 
                            JSON.stringify(this.allRecords));
    });
  }

  loadFromCache() {
    const temp = window.localStorage.getItem('categoriesByName');
    if(temp) {
      this.categoriesByName = JSON.parse(temp);
    }
    
    this.initCategory();
  }

  loadMore() {
    this.displayCount += 5;

    this.applyFilters();
    if(this.displayCount == this.allRecords) {
      this.currentPage++;
      this.initCategory();
    }
  }

  applyFilters() {
    if(this.categoryNames.length == 0) {
      this.allFiltered = this.allRecords;
      this.records = this.allFiltered.slice(0, this.displayCount);
      return;
    }

    let allDeselected = true;
    for(let i in this.planCategories) {
      if(this.planCategories[i]) {
        allDeselected = false;
      }
    }

    if(allDeselected) {
      this.allFiltered = this.allRecords;
      this.records = this.allFiltered.slice(0, this.displayCount);
      return ;
    }

    this.allFiltered = this.allRecords.filter(tp => {
      if(tp.excerpt.category) {
        return this.planCategories[tp.excerpt.category];
      }
    });

    this.records = this.allFiltered.slice(0, this.displayCount);
  }

  toggleCategory(cat: string) {
    this.planCategories[cat] = !this.planCategories[cat];
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
}
