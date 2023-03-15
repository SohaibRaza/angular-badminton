import { Injectable } from '@angular/core';
import { PageService } from './page.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private latestPodcasts: any;
  private pageService: PageService;
  constructor(
    private storageService: StorageService
  ) { }

  getPodcasts(pageService: PageService, displayCount = 5, currentPage = 1): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      this.pageService = pageService;
      try {
        const res = await pageService.getPromiseParentPages(pageService.mainPages['tv-podcasts'].id, currentPage, displayCount);
        const podcasts = [];

        let latestDate = window.localStorage.getItem('latestCreatedPodcasts');
        if(latestDate != res[0].date) {
          window.localStorage.setItem('latestCreatedPodcasts', res[0].date);
        }
        console.log(res);
        for(let tp of res) {
          podcasts.push(this.parseItem(tp));
        }

        window.localStorage.setItem('latestPodcasts', JSON.stringify(this.latestPodcasts ? this.latestPodcasts : []));
        this.storageService.set('latestPodcasts', JSON.stringify(this.latestPodcasts ? this.latestPodcasts : []))

        window.localStorage.setItem('podcasts', JSON.stringify(podcasts ? podcasts : []));

        resolve([podcasts.slice(0, displayCount), this.latestPodcasts, res]);
      } catch (error) {
        reject(error);
      }
    });
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
    if(!this.latestPodcasts) {
      this.latestPodcasts = [temp];
    } else {
      if(this.latestPodcasts.length < 5) {
        this.latestPodcasts.push(temp);
      }
    }

    return temp;
  }
}
