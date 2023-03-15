import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss'],
})
export class ArticleContentComponent implements OnInit {
  article: any;
  articles: any = [];
  
  constructor(
    public activeRoute: ActivatedRoute,
    public articleService: ArticlesService
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.articleService.getArticles(1, 6).subscribe((res: any) => {
        this.articles = [];
        for(let art of res) {
          
          if(art.id == parseInt(params.id)) {
            continue;
          }
          
          this.articles.push(art);
          if(this.articles.length == 5) {
            break;
          }
        }
      });

      const tempArticle = window.localStorage.getItem('article' + params.id);
      if(tempArticle) {
        this.article = JSON.parse(tempArticle);
      }

      this.articleService.getSingleArticle(params.id).subscribe((res: any) => {
        let tempRes = '';
        let isOpen = false;
        for(let i = 0; i < res.rendered_content.length; i++) {
          if(res.rendered_content[i] == '[') {
            isOpen = true;
            continue;
          }

          if(res.rendered_content[i] == ']') {
            isOpen = false;
            continue;
          }

          if(isOpen) {
            continue;
          }

          tempRes += res.rendered_content[i];
        }
        
        res.rendered_content = tempRes;
        res.rendered_content = res.rendered_content.replace('Other articles', '');
        this.article = res;
        console.log(this.article);

        window.localStorage.setItem('article' + this.article.id, JSON.stringify(this.article));
      })
    })
  }

}
