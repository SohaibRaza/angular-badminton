import { Injectable } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { WPService } from './wp.service';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  loginImages: any;

  constructor(private wpService: WPService) {
    // Initializing login images from cache
    const temp = window.localStorage.getItem('loginImages');

    if(temp) {
      this.loginImages = JSON.parse(temp);
    }
  }

  /**
   * Getting media list, pagination must be added
   */
  getMedia() {
    return this.wpService.sendGet(environment.wpUrl + 'media', {});
  }

  getMediaItem(mediaId: number) {
    return this.wpService.sendGet(environment.wpUrl + 'media/' + mediaId, {});
  }

  getMediaByPost(postId: string) {
    return this.wpService.sendGet(environment.wpUrl + 'media', {
      parent: postId
    });
  }

  /**
   * Getting media list for login slider
   */
  getLoginImages() {
    return this.wpService.sendGet(environment.wpUrl + 'media', {
      search: environment.loginImagesName
    }).pipe(map((res: any)=> {
      const images = [];
      
      for(let img of res) {
        if(window.innerWidth < 760) {
          if(img.title.rendered == environment.loginImagesName) {
            images.push({
              source_url: img.source_url,
              alt_text: img.alt_text
            });
          }
        } else {
          if(img.title.rendered == environment.loginImagesLargeName) {
            images.push({
              source_url: img.source_url,
              alt_text: img.alt_text
            });
          }
        }
        
      }

      localStorage.setItem('loginImages', JSON.stringify(images));

      return images;
    }));
  }

  /**
   * Getting media list for browse slider
   */
  getBrowseImages() {
    return this.wpService.sendGet(environment.wpUrl + 'media', {
      search: environment.browseImagesName
    }).pipe(tap((res: any)=> {
      const images = [];
      
      console.log(res);

      for(let img of res) {
        if(img.title.rendered == environment.browseImagesName) {
          images.push(img.source_url);
        }
      }

      localStorage.setItem('loginImages', JSON.stringify(images));
    }));
  }

  /**
   * Getting posts
   */
  getPosts() {
    return this.wpService.sendGet(environment.wpUrl + 'posts', {

    });
  }

  /**
   * Getting categories
   */
  getCategories() {
    return this.wpService.sendGet(environment.wpUrl + 'categories', {});
  }

  /**
   * Getting categories
   */
  getFavorites() {
    return this.wpService.sendGet(environment.apiUrl + 'favorites', {});
  }

  /**
   * Getting categories
   */
  getPages() {
    return this.wpService.sendGet(environment.wpUrl + 'pages', {
      slug: 'training-programs'
    });
  }
}
