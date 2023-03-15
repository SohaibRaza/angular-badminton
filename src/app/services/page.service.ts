import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WPService } from './wp.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private pageSlugs = [
    'training-programs',
    'tactical-lessons',
    'physical',
    'mental-courses',
    'tv-podcasts',
    'video-tutorials',
    'browse-main-slider',
    'kids-academy'
  ];

  public pageUrlsBySlugs: any = {
    'training-programs': 'training-programs',
    'tactical-lessons': 'tactical-lessons',
    'physical': 'physical-programs',
    'mental-courses': 'mental-courses',
    'tv-podcasts': 'podcasts',
    'video-tutorials': 'tutorials',
    'kids-academy': 'kids-academy'
  };

  public mainPages: any = {};
  public mainPagesById: any = {};

  constructor(
    private wpService: WPService
  ) { }
  
  /**
   * Initing all pages by main slugs
   */
  initMainPages() {
    const mainPagesData = window.localStorage.getItem('mainPages');
    this.mainPages = mainPagesData ? JSON.parse(mainPagesData) : {};
    const promises = [];
    for(let slug of this.pageSlugs) {
      const prm = this.getPageBySlug(slug).toPromise().then(res => {
        this.mainPages[slug] = res[0];
        this.mainPagesById[res[0].id] = res[0];
        
        window.localStorage.setItem('mainPages', JSON.stringify(this.mainPages));
      });

      promises.push(prm);
    }

    return promises;
  }

  /**
   * Getting pages by unique slug
   * @param slug 
   */
  getPageBySlug(slug: string) {
    return this.wpService.sendGet(environment.wpUrl + 'pages', {
      slug: slug
    });
  }

  /**
   * Getting pages by parent
   * @param parent parent id
   * @param page current page of result
   * @param per_page results per page
   */
  getPageByParent(parent: number, page: number = 1, per_page: number = 5, ops: any = {}): Observable<any> {
    return this.wpService.sendGet(environment.wpUrl + 'pages', {
      parent: parent,
      per_page: per_page,
      page: page,
      ...ops,
      timestamp: Date.now()
    });
  }

  /**
   * Getting pages by parent and it will return promise results
   * @param parent parent id
   * @param page current page of result
   * @param per_page results per page
   */
  getPromiseParentPages(parent: number, page: number = 1, per_page: number = 5, ops: any = {}): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.getPageByParent(parent, page, per_page, ops).subscribe(
        (res: any) => resolve(res),
        (err: any) => reject (err)
      )
    });
  }
  
  /**
   * Getting single page by its id
   * @param id id of the page
   */
  getSinglePage(id: number) {
    return this.wpService.sendGet(environment.wpUrl + 'pages/' + id, {});
  }

  /**
   * Parsing pure_excerpt custom field and returning the object
   * @param excerpt 
   */
  parsePureExcerpt(excerpt: string) {
    return JSON.parse(excerpt.replace(/(\r\n|\n|\r)/gm, ""));
  }

  /**
   * Get pages filtered by tags
   * @param tags Array of tag ids that must be present in the search
   * @param page current page of result
   * @param per_page results per page
   */
  getPagesByQuery(query: any, page: number, per_page: number) {
    return this.wpService.sendGet(environment.wpUrl + 'pages', {
      ...query,
      per_page: per_page,
      page: page,
      timestamp: Date.now()
    });
  }
}
