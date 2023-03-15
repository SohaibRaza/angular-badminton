import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { DownloadedOptions } from 'src/app/shared/filters/interfaces/DownloadContent';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss'],
})
export class DownloadsComponent implements OnInit {

  public parentDownloadList: DownloadedOptions[] = [];
  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.getAllDownloads();
  }

  async getAllDownloads(): Promise<void> {
    const downloadList: DownloadedOptions[] = await this.storageService.get('downloaded-content') || [];
    
    downloadList.forEach((ele: DownloadedOptions) => {
      const index = this.parentDownloadList.findIndex(x => x.page === ele.page);
      if (index === -1) {
        this.parentDownloadList.push(ele);
      }
    });
  }

}
