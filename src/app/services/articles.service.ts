import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PostsService } from './posts.service';
import { WPService } from './wp.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articleCategory: any;
  
  constructor(
    private wpService: WPService,
    private postsServices: PostsService
    ) {
    this.articleCategory = window.localStorage.getItem('articleCategory');
    this.articleCategory = this.articleCategory ? JSON.parse(this.articleCategory) : null;
  }

  /**
   * Getting the `Articles` category object to filter posts within that category
   */
  getMainCategory() {
    return this.wpService.sendGet(environment.wpUrl + 'categories', {
      slug: 'articles'
    }).pipe(
      switchMap((res: any) => {
        this.articleCategory = res[0];
        window.localStorage.setItem('articleCategory', JSON.stringify(res[0]));

        return res;
      })
    );
  }

  /**
   * Getting list of articles from back end
   * @param page 
   * @param per_page 
   */
  getArticles(page: number, per_page: number) {
    if(!this.articleCategory) {
      console.error('Category object is not present');
      return null;
    }

    return this.postsServices.getPostsByCategory(this.articleCategory.id, page, per_page);
  }
  
  /**
   * Get single article record from backend
   * @param id 
   */
  getSingleArticle(id: string) {
    return this.postsServices.getSinglePost(id);
  }
}
