import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { PageService } from 'src/app/services/page.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mental-courses',
  templateUrl: './mental-courses.component.html',
  styleUrls: ['./mental-courses.component.scss'],
})
export class MentalCoursesComponent implements OnInit {
  mentalCourses: any = [];
  planCategories: any = [];
  displayCount: number = 5;
  currentPage: number = 1;
  pageMeta: any;

  latestMentalCourses: any;
  isInLatest: any = {};
  loading: any;
  isLoading: boolean;
  filteredMentalCourses: any = [];

  constructor(
    private userService: UserService,
    private pageService: PageService,
    private loadingCtrl: LoadingController
  ) { }

  doRefresh(event) {
    this.initPages();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
    this.startLoading();
    this.userService.getMe().subscribe(res => {

      if(!this.pageService.mainPages['mental-courses']) {
        this.pageService.getPageBySlug('mental-courses').subscribe(res => {
          this.pageService.mainPages['mental-courses'] = res[0];

          this.initPages();
        })
      } else {
        this.initPages();
      }      
    })
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
    
    try {
      const res = await this.pageService.getPromiseParentPages(this.pageService.mainPages['mental-courses'].id, this.currentPage, 50)
      this.mentalCourses = [];
      this.latestMentalCourses = [];
      const temp: any = {};
      temp.excerpt = this.pageService.parsePureExcerpt(this.pageService.mainPages['mental-courses'].pure_excerpt);
      temp.featured_image_src = this.pageService.mainPages['mental-courses'].featured_image_src;
      this.pageMeta = temp;
      
      let latestDate = window.localStorage.getItem('latestCreatedMentalCourse');
      if(latestDate != res[0].date) {
        window.localStorage.setItem('latestCreatedMentalCourse', res[0].date);
        this.startLoading();
      }

      window.localStorage.setItem('mentalCategoriesMeta', JSON.stringify(temp));

      for(let tp of res) {
        this.mentalCourses.push(this.parseItem(tp));
      }
      
      this.filteredMentalCourses = this.mentalCourses.slice(0, this.displayCount);
      setTimeout(() => this.stopLoading(), 500);
      window.localStorage.setItem('latestMentalCourses', JSON.stringify(this.latestMentalCourses ? this.latestMentalCourses : []));
      window.localStorage.setItem('mentalCourses', JSON.stringify(this.mentalCourses ? this.mentalCourses : []));
    } catch (error) {
      console.log(error.message);
    }
  }

  toggleCategory(cat: string) {
    this.planCategories[cat] = !this.planCategories[cat];
    this.applyFilters();
  }

  applyFilters() {
    this.filteredMentalCourses = this.mentalCourses.slice(0, this.displayCount);
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

    if(!this.latestMentalCourses) {
      this.latestMentalCourses = [temp];
    } else {
      if(this.latestMentalCourses.length < 5) {
        this.latestMentalCourses.push(temp);
      }
    }

    return temp;
  }


  loadMore() {
    this.displayCount += 5;
    this.applyFilters();
    
    if(this.displayCount == this.mentalCourses.length) {
      this.currentPage++;
      this.initPages();
    }
  }

  async loadFromCache() {
    try {
      await this.startLoading();
      this.mentalCourses = window.localStorage.getItem('mentalCourses');
      this.mentalCourses = this.mentalCourses ? JSON.parse(this.mentalCourses) : [];
      this.filteredMentalCourses = this.mentalCourses.slice(0, this.displayCount);

      this.latestMentalCourses = window.localStorage.getItem('latestMentalCourses');
      this.latestMentalCourses = this.latestMentalCourses ? JSON.parse(this.latestMentalCourses) : [];

      this.pageMeta = window.localStorage.getItem('mentalCategoriesMeta');
      this.pageMeta = this.pageMeta ? JSON.parse(this.pageMeta) : null;

      window.localStorage.removeItem('latestMentalCourses');

    
      for(let temp of this.latestMentalCourses) {
        this.isInLatest[temp.id] = true;
      }

      if(this.mentalCourses && this.mentalCourses.length) {
        await this.stopLoading();
      }
    } catch(e) {
      await this.stopLoading();
    }    
  }

}
