import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Entry, File, FileEntry, DirectoryEntry } from '@ionic-native/file/ngx';
import { StorageService } from './storage.service';
import { DownloadedOptions } from '../shared/filters/interfaces/DownloadContent';

@Injectable({
  providedIn: 'root'
})
export class VimeoService {

  private url: string = 'https://api.vimeo.com/videos'
  private xhr: XMLHttpRequest;

  constructor(
    private http: HttpClient,
    private cHttp: HTTP,
    private ft: FileTransfer,
    private file: File,
    private storageService: StorageService
  ) {
    const headers = {
      Authorization: `bearer ${ environment.vimeo.token}`
    }
  }

  protected getWithHeaders(url: string): Observable<any> {
    const headers = {
      Authorization: `bearer ${ environment.vimeo.token}`
    }
      return this.http.get(url, { headers }) as Observable<any>;
  }

  protected downloadWithProgress(url: string, progress: any): any {
    return new Promise((resolve, reject) => {
      try {
        this.xhr = new XMLHttpRequest();
        // xhr.setRequestHeader('')
        this.xhr.responseType = 'arraybuffer';
        this.xhr.open('GET', url, true);
  
        this.xhr.onload = () => {
          console.log('HTTP request completed', this.xhr.status);
          resolve(this.xhr.response);
        };
        
        this.xhr.onerror = () => {
          console.log('HTTP request error', this.xhr.status);
        };
        
        this.xhr.onprogress = (event: ProgressEvent) => {
          progress.next(((event.loaded / event.total) * 100).toFixed(0));
          // console.log('HTTP request progress', `${((event.loaded / event.total) * 100).toFixed(2)} %`);
        };
        this.xhr.send();
      } catch (e) {
        reject(e);
      }
    });
  }

  getLinks(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getWithHeaders(`${ this.url }/${ id }`)
        .subscribe((event: any) => {
          console.log('event', event);
          resolve(event);
        }, (error: any) => reject(error));
    });
  }

  cancelDownload() {
    this.xhr.abort();
  }

  // protected download(id: any): Promise<HTTPResponse> {
  //   // return new Promise<any>((resolve, reject) => {
  //   //   this.getWithHeaders(`${ id }`, false).subscribe((event: any) => {
  //   //     if (event.type === HttpEventType.DownloadProgress) {
  //   //       const progress = Math.round(100 * event.loaded / event.total);
  //   //       console.log(`Downloading ${ progress} ...`);
  //   //     } else if (event.type === HttpEventType.Response) {
  //   //       const blob = new Blob([event.body]);
  //   //       console.log(`Downloaded ${ blob } ...`);
  //   //       alert('donloaded');
  //   //       resolve(blob);
  //   //     }
  //   //   }, err => {
  //   //     console.log(err);
  //   //     reject(err)
  //   //   });
  //   // });
  //   try {
  //     this.cHttp.setDataSerializer('multipart');
  //     //// Need to change content-type to array buffer for progress bar and resume start capability ////
  //     this.cHttp.setHeader(id, 'Content-Type', 'video/mp4');
  //     this.cHttp.setHeader(id, 'Access-Control-Allow-Origin', '*',);
  //     return this.cHttp.get(id, null, { method: "get", responseType: "arraybuffer" });
  //   } catch (err) {
  //     return Promise.reject(err);
  //   }
  // }

  getAndDownload(id: number, link: string, progress: any, category: string, contentId: string | number, data: any): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      // this.getWithHeaders(`${ this.url }/${ id }`)
      //   .subscribe(async (event: any) => {
          // console.log(event.download);
          // const fileIndex = event.download.findIndex((ele: any) => ele.public_name == type);
          // if (fileIndex === -1) reject(false);
          // console.log(fileIndex);
          console.log(data);
          console.log(id, link)
          try {
            // const link = event.download[fileIndex].link;
            // const blob = await this.download(link);
            const blob = await this.downloadWithProgress(link, progress);
            resolve(true);
            /// there's an issue appeared for file management need to fix that ///
            const filename = `${id}.mp4`;
            await this.file.createFile(this.file.documentsDirectory, filename, false)
            console.log('creating file', filename);
            const file = new Blob([blob.data], { type: 'video/mp4' });
            await this.file.writeFile(this.file.documentsDirectory, filename, file, { replace: true, append: false })
            console.log('writing file', filename);
            const dir = await this.file.resolveDirectoryUrl(this.file.documentsDirectory);
            console.log('fetching files in: ' + this.file.documentsDirectory);
            // const files = await this.file.listDir(dir.fullPath, '');
            // console.log('fetched', files);
            const downFile = await this.file.getFile(dir, filename, { create: false });
            // dir.getDirectory(this.file.documentsDirectory)
            console.log(downFile);
            const localFiles: DownloadedOptions[] = await this.storageService.get('downloaded-content') || [];
            console.log(localFiles)
            localFiles.push({
              page: category,
              downloadLink: link,
              contentId,
              filename,
              title: data.title,
              picture: data.pictures.base_link
            })
            this.storageService.set('downloaded-content', localFiles);
            resolve(true);
            console.log('download done');
          } catch (error) {
            console.log('trycatch', error.message);
            reject(false);
          }
      // }, (err: any) => {
      //   console.log(err);
      //   reject(false)
      // });
    })
  }

  async listAllContent(): Promise<void> {
    const dir = await this.file.resolveDirectoryUrl(this.file.documentsDirectory);
    console.log('fetching files in: ' + this.file.documentsDirectory);
    const files: Entry[] = await this.file.listDir(this.file.documentsDirectory, '') || [];
    files.forEach((file: Entry) => {
      console.log(file.name);
    })
  }

  async getFile(fileName: string): Promise<FileEntry> {
    const dir: DirectoryEntry = await this.file.resolveDirectoryUrl(this.file.documentsDirectory);
    return this.file.getFile(dir, fileName, { create: false });
    // if (file) {
    // return `${this.file.documentsDirectory}${fileName}`;
    // }
  }

}
