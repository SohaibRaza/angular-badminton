import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  displayCount: number = 5;
  articles: any = [];
  filteredArticles: any = [];
  currentPage: number = 1;
  loading: any;
  isLoading: boolean;

  constructor(
    private articleService: ArticlesService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.loadFromCache();
    if(this.articleService.articleCategory) {
      this.initArticles();
      return ;
    }

    this.articleService.getMainCategory().subscribe(article => {
      this.initArticles();
    });
  }

  initArticles() {
    this.articleService.getArticles(this.currentPage, 50).subscribe(async res => {
      const newData = JSON.stringify(res);
      
      this.articles = res;
      this.applyFilters();
      window.localStorage.setItem('articles', newData);      
    });
  }

  async loadFromCache() {
    await this.startLoading();
    try {
      this.articles = window.localStorage.getItem('articles');
      this.articles = this.articles ? JSON.parse(this.articles) : [];
      this.filteredArticles = this.articles.slice(0, this.displayCount);

    } catch(e) {
      // nothing here, since it must not be the case
    }

    this.stopLoading();
  }

  applyFilters() {
    this.filteredArticles = this.articles.slice(0, this.displayCount);
  }

  loadMore() {
    this.displayCount += 5;
    this.applyFilters();
  }

  async startLoading() {
    this.loading = await this.loadingCtrl.create();

    this.loading.present();
    this.isLoading = true;
  }

  async stopLoading() {
    this.loading.dismiss();
    this.isLoading = false;
  }

}
