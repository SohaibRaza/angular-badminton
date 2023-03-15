import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WPService } from './wp.service';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(
    private wpService: WPService
  ) {}

  /**
   * Get list of tags
   * @param page page of the result by pagination
   * @param per_page results per page
   */
  getTags(page: number = 1, per_page: number = 5) {
    return this.wpService.sendGet(environment.wpUrl + 'tags', {
      page: page,
      per_page: per_page  
    });
  }

  /**
   * Getting all categories
   */
  getCategories() {
    return this.wpService.sendGet(environment.wpUrl + 'categories', {
      page: 1,
      per_page: 50,
      timestamp: Date.now()
    });
  }
}
