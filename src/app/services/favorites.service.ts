import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { WPService } from './wp.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favoritedVideos: any = {};
  favoritedPages: any = {};
  playlists: any = [];
  favorites: any = [];
  playlistsById: any = {};

  constructor(private wpService: WPService) {
    const videos = window.localStorage.getItem('favoritedVideos');
    if(videos) {
      this.favoritedVideos = JSON.parse(videos);
    }

    const pages = window.localStorage.getItem('favoritedPages');
    if(pages) {
      this.favoritedPages = JSON.parse(pages);
    }

    const playlistsById = window.localStorage.getItem('playlistsById');
    if(pages) {
      this.playlistsById = JSON.parse(playlistsById);
    } else {
      this.playlistsById = {};
    }

    const playlists = window.localStorage.getItem('playlists');
    if(pages) {
      this.playlists = JSON.parse(playlists);
    }
  }

  getFavorites() {
    return this.wpService.sendGet(environment.apiUrl + 'favorites', {}).pipe(
      tap((res: any) => {
        this.favorites = res;
        this.favoritedPages = {};
        this.favoritedVideos = {};
        for(let fav of this.favorites) {
          if(fav.entity_type == 'video') {
            this.favoritedVideos[fav.entity_id] = true;
          } else {
            this.favoritedPages[fav.entity_id] = true;
          }
        }

        window.localStorage.setItem('favoritedVideos', JSON.stringify(this.favoritedVideos));
        window.localStorage.setItem('favoritedPages', JSON.stringify(this.favoritedPages));

        return res;
      })
    );
  }
  

  getPlaylists() {
    
    return this.wpService.sendGet(environment.apiUrl + 'get_mobile_playlists', {}).pipe(
      tap((res: any) => {
        this.playlists = res;
        for(let pl of this.playlists) {
          this.playlistsById[pl.id] = pl;
        }
        window.localStorage.setItem('playlists', JSON.stringify(res));
        window.localStorage.setItem('playlistsById', JSON.stringify(this.playlistsById));
        return res;
      })
    );
  }

  addFavoriteVideo(videoId: string) {
    this.favoritedVideos[videoId] = true;
    window.localStorage.setItem('favoritedVideos', JSON.stringify(this.favoritedVideos));
    return this.wpService.sendPost(environment.apiUrl + 'add_favorite', {
      entityId: videoId,
      entityType: 'video'
    });
  }

  addFavoritePage(pageId: string, additionalInfo: any) {
    this.favoritedPages[pageId] = true;
    console.log(additionalInfo);
    window.localStorage.setItem('favoritedPages', JSON.stringify(this.favoritedPages));
    return this.wpService.sendPost(environment.apiUrl + 'add_favorite', {
      entityId: pageId,
      entityType: 'page',
      additionalInfo: JSON.stringify(additionalInfo)
    });
  }

  removeFavoritedVideo(videoId: string) {
    this.favoritedVideos[videoId] = false;
    window.localStorage.setItem('favoritedVideos', JSON.stringify(this.favoritedVideos));
    return this.wpService.sendPost(environment.apiUrl + 'remove_favorite', {
      entityId: videoId,
      entityType: 'video'
    });
  }

  removeFavoritePage(pageId: string) {
    this.favoritedPages[pageId] = false;
    window.localStorage.setItem('favoritedPages', JSON.stringify(this.favoritedPages));
    return this.wpService.sendPost(environment.apiUrl + 'remove_favorite', {
      entityId: pageId,
      entityType: 'page'
    });
  }

  addPlaylist(name: string) {

    return this.wpService.sendPost(environment.apiUrl + 'add_playlist', {
      name: name      
    });
  }

  removePlaylist(id: string) {
    return this.wpService.sendPost(environment.apiUrl + 'remove_playlist', {
      id: id
    });
  }

  editPlaylist(id: string, name: string) {
    return this.wpService.sendPost(environment.apiUrl + 'edit_playlist_name', {
      id: id,
      name: name      
    });
  }

  getVideosOfPlaylist(id: string) {
    return this.wpService.sendGet(environment.apiUrl + 'get_videos_from_playlist', {
      id: id     
    });
  }

  addVideoToPlaylist(videoId: string, playlistId: string) {
    return this.wpService.sendPost(environment.apiUrl + 'add_video_to_playlist', {
      videoId: videoId,
      playlistId: playlistId      
    }).pipe(tap(res => {
      this.playlistsById[playlistId].videoIds.push(videoId);
      window.localStorage.setItem('playlistsById', JSON.stringify(this.playlistsById));
      
      return res;
    }));
  }

  removeVideoFromPlaylist(id: string) {
    return this.wpService.sendPost(environment.apiUrl + 'remove_video_from_playlist', {
      id: id
    }).pipe(tap(res => {
      this.getPlaylists().subscribe();
      
      return res;
    }));
  }

  editVideoNote(id: string, note: string) {
    return this.wpService.sendPost(environment.apiUrl + 'edit_playlist_video_note', {
      id: id,
      note: note
    });
  }

  editVideoOrder(id: string, orderNumber: number) {
    return this.wpService.sendPost(environment.apiUrl + 'edit_playlist_video_order', {
      id: id,
      orderNumber: orderNumber
    });
  }
}
