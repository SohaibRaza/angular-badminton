import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CachingService {

  constructor() { }

  notChangedSince(res: any, dateName: string): boolean {
    const existingDate = window.localStorage.getItem(dateName);
    if(!existingDate) {
      if(res.length) {
        window.localStorage.setItem(dateName, res[0].modified);
      } else {
        // No content to load, no need to keep loading
        return true
      }
      
      return false;
    }

    const existing = Date.parse(existingDate);

    for(let record of res) {
      if(Date.parse(record.modified) > existing) {
        window.localStorage.setItem(dateName, record.modified);
        return false;
      }
    }

    return true;
  }
}
