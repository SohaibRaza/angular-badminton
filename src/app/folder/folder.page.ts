import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../services/page.service';
import { MediaService } from '../services/media.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public media: any = [];
  public loginSlides: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private mediaService: MediaService,
    private pageService: PageService
  ) {
    // TODO: get login slides from local storage if possible
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    this.mediaService.getCategories().subscribe(res => {
      console.log(res);
    })

    this.mediaService.getFavorites().subscribe(res => {
      console.log(res);
    })

    this.userService.getMe().subscribe(res => {
      console.log('user', res);
      console.log(this.pageService.mainPages);
      if(!this.pageService.mainPages['training-programs']) {
        this.pageService.getPageBySlug('training-programs').subscribe(res => {
          this.pageService.mainPages['training-programs'] = res[0];

          this.initPages();
        })
      } else {
        this.initPages();
      }      
    })    
  }

  initPages() {
    this.pageService.getPageByParent(this.pageService.mainPages['training-programs'].id).subscribe(res => {
      console.log('pages for training', res);

      const firstPost = res[0];

      this.mediaService.getMediaByPost(firstPost.id).subscribe(mediaRes => {
        console.log('all media for post', firstPost, mediaRes);
      });

      this.mediaService.getMediaItem(firstPost.featured_media).subscribe(mediaRes => {
        console.log('all media for post', firstPost, mediaRes);
      })
    })
  }

}
