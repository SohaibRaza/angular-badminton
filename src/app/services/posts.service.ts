import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WPService } from './wp.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private wpService: WPService) { }

  /**
   * Get posts filtered by category id
   * @param categoryId category id for filter
   * @param page page of pagination
   * @param per_page items per page
   */
  getPostsByCategory(categoryId: number, page: number = 1, per_page: number = 5) {
    return this.wpService.sendGet(environment.wpUrl + 'posts', {
      categories: [categoryId],
      per_page: per_page,
      page: page,
      timestamp: Date.now()
    });
  }

  /**
   * Getting single post
   * @param id id of the post
   */
  getSinglePost(id: string) {
    return this.wpService.sendGet(environment.wpUrl + `posts/${id}`, {});
  }
}
