import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ArticlesService } from 'src/app/services/articles.service';
import { MediaService } from 'src/app/services/media.service';
import { PageService } from 'src/app/services/page.service';
import { TagsService } from 'src/app/services/tags.service';

import { SharedService } from 'src/app/services/shared.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  categories: any = [ 'Singles', 'Doubles', 'Mixed doubles'];
  latestContent: any = [];
  latestTrainingPrograms: any = [];
  latestTacticalLessons: any = [];
  categoriesByName: any = {};
  latestPodcast: any;
  latestPodcasts: any;
  latestKidsAcademy: any;
  latestKidsAcademies: any;
  latestBrowseMentalCourse: any = [];
  latestBrowseMentalCourses: any = [];
  latestPhysicalProgram: any;
  latestPhysicalPrograms: any;
  latestArticles: any = [];
  latestTutorialCategories: any = [];
  sliderItems: any;
  slideOpts: any = {};
  loading: any;
  isLoading: boolean;

  constructor(
    public pageService: PageService,
    public tagsService: TagsService,
    public articleService: ArticlesService,
    public mediaService: MediaService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private sharedService: SharedService,
    private storageService: StorageService
  ) { }

  async ngOnInit() {
    await this.startLoading();
    if(!this.pageService.mainPages['tactical-lessons']) {
      Promise.all(this.pageService.initMainPages()).then(async res => {
        await this.initPages();
      });
    } else {
      await this.initPages();
      
    }
    // this.getNewList(null);
  }

  doRefresh(event) {

    setTimeout(() => {
      this.initMainContent();
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async initPages() {
    await this.startLoading();
    const promiseList = [
      this.initTacticalLessons(),
      this.initMentalCourse(),
      this.initTrainingPrograms(),
      this.initPodcast(),
      this.initPhysical(),
      this.initKidsAcademies(),
      this.initMainContent(),
      this.initArticles(),
      this.initTutorials(),
      this.initSliderContent()
    ];

    try {
      const res = await Promise.allSettled(promiseList)
      console.log('Async operation has ended', res);
      this.stopLoading();
    } catch (error) {
      console.log(error.message);
    }
  }

  async initMainContent() {
    // Get all categories and get all pages for all categories as a latest content in the website
    await this.initCategories();
    const catIds = [this.categoriesByName['Newest'].id];

    return new Promise((resolve, reject) => {
      this.pageService.getPagesByQuery({
        categories: catIds.join(',')
      }, 1, 5).subscribe((res: any[]) => {
        this.latestContent = [];
        for(let temp of res) {
          const tempRec: any = {
            featured_image_src: temp.featured_image_src,
            id: temp.id
          };
          
          if(temp.parent) {
            tempRec.parent = {
              slug: this.pageService.mainPagesById[temp.parent].slug
            }
          }
  
          this.latestContent.push(tempRec);
        }
        
  
        window.localStorage.setItem('latestContent', JSON.stringify(this.latestContent));
        resolve(true)
      }, error => reject());
    })
  }

  initCategories() {
    return new Promise((resolve, rejectt) => {
      const temp = window.localStorage.getItem('categoiresByName');
      if(temp) {
        this.categoriesByName = JSON.parse(temp);
        resolve(true);
      } else {
        this.tagsService.getCategories().subscribe((res: Array<any>) => {
          for(let cat of res) {
            this.categoriesByName[cat.name] = cat;
          }

          window.localStorage.setItem('categoiresByName', JSON.stringify(this.categoriesByName));
          resolve(true);
        });
      }
    })
    
  }

  async initTacticalLessons() {
    try {
      const res = await this.pageService.getPromiseParentPages(this.pageService.mainPages['tactical-lessons'].id, 1, 5)
      this.latestTacticalLessons = res;

      window.localStorage.setItem('latestTacticalLessons', JSON.stringify(this.latestTacticalLessons));
      this.storageService.set('latestTacticalLessons', JSON.stringify(this.latestTacticalLessons));
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async initKidsAcademies() {
    try {
      const res = await this.pageService.getPromiseParentPages(this.pageService.mainPages['kids-academy'].id, 1, 5)
      this.latestKidsAcademy = res[0];
      this.latestKidsAcademies = res;

      window.localStorage.setItem('latestKidsAcademies', JSON.stringify(res));
      this.storageService.set('latestKidsAcademies', JSON.stringify(res));
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async initTrainingPrograms() {
    try {
      const res = await this.pageService.getPromiseParentPages(this.pageService.mainPages['training-programs'].id, 1, 5)
      this.latestTrainingPrograms = res;

      window.localStorage.setItem('latestTrainingPrograms', JSON.stringify(this.latestTrainingPrograms));
      this.storageService.set('latestTrainingPrograms', JSON.stringify(this.latestTrainingPrograms));
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async initPodcast() {
    try {
      const { 2: res } = await this.sharedService.getPodcasts(this.pageService, 5, 1);

      this.latestPodcast = res[0];
      this.latestPodcasts = res;

      window.localStorage.setItem('latestPodcast', JSON.stringify(this.latestPodcast));
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async initPhysical() {
    try {
      const res = await this.pageService.getPromiseParentPages(this.pageService.mainPages['physical'].id, 1, 5)
      const record = res[0];

      try {
        record.excerpt = this.pageService.parsePureExcerpt(record.pure_excerpt);
      } catch(e) {
        record.excerpt = {};
      }

      this.latestPhysicalProgram = {
        id: record.id,
        featured_image_src: record.featured_image_src,
        excerpt: record.excerpt,
        title: record.clean_title
      };

      this.latestPhysicalPrograms = res;

      window.localStorage.setItem('latestPhysicalProgram', JSON.stringify(this.latestPhysicalProgram));
      window.localStorage.setItem('latestPhysical', JSON.stringify(this.latestPhysicalPrograms.slice(0, 5)));
      this.storageService.set('latestPhysical', JSON.stringify(this.latestPhysicalPrograms.slice(0, 5)));
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async initMentalCourse() {
    try {
      const res = await this.pageService.getPromiseParentPages(this.pageService.mainPages['mental-courses'].id, 1, 5)
      const tempRecords = [];
      for(let record of res) {
        tempRecords.push({
          id: record.id,
          featured_image_src: record.featured_image_src,
          pure_excerpt: record.pure_excerpt,
          title: record.clean_title
        })
      };

      try {
        tempRecords[0].excerpt = this.pageService.parsePureExcerpt(tempRecords[0].pure_excerpt);
      } catch(e) {
        tempRecords[0].excerpt = {};
      }
      this.latestBrowseMentalCourse = tempRecords[0];
      this.latestBrowseMentalCourses = tempRecords;

      window.localStorage.setItem('latestBrowseMentalCourse', JSON.stringify(this.latestBrowseMentalCourse));
      window.localStorage.setItem('latestMentalCourses', JSON.stringify(this.latestBrowseMentalCourses.slice(0, 5)));
      this.storageService.set('latestMentalCourses', JSON.stringify(this.latestBrowseMentalCourses.slice(0, 5)));

      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  initTutorials() {
    this.pageService.getPageByParent(this.pageService.mainPages['video-tutorials'].id, 1, 5, {
      order: 'asc',
      orderby: 'menu_order'
    }).subscribe((res: any) => {
      const tempRecords = [];
      
      for(let record of res) {
        tempRecords.push({
          id: record.id,
          featured_image_src: record.featured_image_src
        });
      }
      this.latestTutorialCategories = tempRecords;

      window.localStorage.setItem('latestTutorialCategories', JSON.stringify(this.latestTutorialCategories));
      this.storageService.set('latestTutorialCategories', JSON.stringify(this.latestTutorialCategories));
    });
  }

  initArticleRecords() {
    this.articleService.getArticles(1, 5).subscribe(res => {
      this.latestArticles = res;

      window.localStorage.setItem('latestArticles', JSON.stringify(this.latestArticles));
    });
  }

  initArticles() {
    if(this.articleService.articleCategory) {
      this.initArticleRecords();
      return ;
    }

    this.articleService.getMainCategory().subscribe(article => {
      this.initArticles();
    });
  }

  async initSliderContent() {
    try {
      const res = await this.pageService.getPromiseParentPages(this.pageService.mainPages['browse-main-slider'].id, 1, 5, {
        order: 'asc',
        orderby: 'menu_order'
      })
        const tempItems = [];
        for(let item of res) {
          const tempItem: any = {
            featured_image_src: item.featured_image_src
          };
  
          try {
            tempItem.excerpt = this.pageService.parsePureExcerpt(item.pure_excerpt);
          } catch (e) {
            
          }
          
          tempItems.push(tempItem)
        }
  
        if(!this.isSameData(tempItems, this.sliderItems)) {
          this.sliderItems = null;
          console.log('not the same');
          // TODO: filter by screen size
          this.sliderItems = tempItems;
          window.localStorage.setItem('sliderItems', JSON.stringify(this.sliderItems));
        }
      return true;
    } catch (error) {
      throw new Error(error.message);
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

  goToPageByParent(item: any) {
    if(!item.parent) {
      return ;
    }

    const excerpt: any = {
      itemId: item.id
    };

    switch(item.parent.slug) {
      case 'training-programs':
        excerpt.itemType = 'training-program';
        break;

      case 'tactical-lessons':
        excerpt.itemType = 'tactical-lesson';
        break;

      case 'physical':
        excerpt.itemType = 'physical-program';
        break;

      case 'mental-courses':
        excerpt.itemType = 'mental-course';
        break;

      case 'tv-podcasts':
        excerpt.itemType = 'podcast';
        break;

      case 'video-tutorials':
        excerpt.itemType = 'tutorial';
        break;
      
      case 'kids-academy':
        excerpt.itemType = 'kids-academy';
        break;
    }

    this.goToPage({
      excerpt
    });
  }

  goToPage(item: any) {
    let url = '/';
    switch(item.excerpt.itemType) {
      case 'training-program':
        url += 'training-programs/';
        break;

      case 'tactical-lesson':
        url += 'tactical-lessons/';
        break;

      case 'podcast':
        url += 'podcasts/';
        break;

      case 'physical-program':
        url += 'physical-programs/';
        break;

      case 'mental-course':
      url += 'mental-courses/';
      break;

      case 'tutorial':
      url += 'tutorials/';
      break;

      case 'article':
      url += 'articles/';
      break;

      case 'kids-academy':
      url += 'kids-academy/';
      break;
    }

    url += item.excerpt.itemId;

    this.router.navigateByUrl(url);
  }

  async loadFromCache() {
    let temp = window.localStorage.getItem('latestTacticalLessons');
    if(temp) {
      this.latestTacticalLessons = JSON.parse(temp);
    }

    temp = window.localStorage.getItem('latestTrainingPrograms');
    if(temp) {
      this.latestTrainingPrograms = JSON.parse(temp);
    }

    temp = window.localStorage.getItem('latestContent');
    if(temp) {
      this.latestContent = JSON.parse(temp);
    }

    temp = window.localStorage.getItem('latestPodcast');
    if(temp) {
      this.latestPodcast = JSON.parse(temp);
    }

    temp = window.localStorage.getItem('latestKidsAcademies');
    if(temp) {
      this.latestKidsAcademies = JSON.parse(temp);
      this.latestKidsAcademy = this.latestKidsAcademies[0];
    }

    temp = window.localStorage.getItem('latestPhysicalProgram');
    if(temp) {
      this.latestPhysicalProgram = JSON.parse(temp);
    }

    temp = window.localStorage.getItem('latestBrowseMentalCourse');
    if(temp) {
      this.latestBrowseMentalCourse = JSON.parse(temp);
    }

    temp = window.localStorage.getItem('latestArticles');
    if(temp) {
      this.latestArticles = JSON.parse(temp);
    }

    temp = window.localStorage.getItem('latestTutorialCategories');
    if(temp) {
      this.latestTutorialCategories = JSON.parse(temp);
    }

    temp = window.localStorage.getItem('sliderItems');
    if(temp) {
      this.sliderItems = JSON.parse(temp);
    }

    if(this.sliderItems) {
      this.stopLoading();
    }
  }

  isSameData(a, b) {
    return JSON.stringify(a) == JSON.stringify(b);
  }

  isPhone() {
    return window.innerWidth < 700;
  }
}
