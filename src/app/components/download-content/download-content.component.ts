import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { VimeoService } from 'src/app/services/vimeo.service';
import { DownloadedOptions } from 'src/app/shared/filters/interfaces/DownloadContent';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { IFile, FileEntry } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-download-content',
  templateUrl: './download-content.component.html',
  styleUrls: ['./download-content.component.scss'],
})
export class DownloadContentComponent implements OnInit {

  public parentDownloadList: DownloadedOptions[] = [];
  constructor(
    private storageService: StorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private vimeoService: VimeoService,
    private videoPlayer: VideoPlayer,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.getAllDownloads(id);
    });
  }

  async getAllDownloads(id: string): Promise<void> {
    const downloadList: DownloadedOptions[] = await this.storageService.get('downloaded-content') || [];
    
    this.parentDownloadList = downloadList.filter((download: DownloadedOptions) => download.page === id);
    this.parentDownloadList.forEach((download: DownloadedOptions) => {
      this.setVideo(download.filename);
    })
    this.vimeoService.listAllContent();
  }

  async setVideo(filename: string) {
    const file: FileEntry = await this.vimeoService.getFile(filename);
    const video = document.getElementById(filename) as HTMLImageElement;
    file.file((x) => {
      console.log('xxxx=>>>', x);
      const videoUrl = URL.createObjectURL(x);
      video.src = videoUrl;
    })
    // file.file((x: IFile) => {
      // video.setAttribute('src', file.nativeURL); 

    // })
  }

  // async play(fileName: string) {
  //   const file = await this.vimeoService.getFile(fileName);
  //   console.log('this is file name: ', file);
  //   await this.videoPlayer.play(file);

  // }

}
