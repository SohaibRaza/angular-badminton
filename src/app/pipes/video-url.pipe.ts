import { Pipe, PipeTransform } from '@angular/core';
import { VimeoService } from '../services/vimeo.service';

@Pipe({
  name: 'videoUrl'
})
export class VideoUrlPipe implements PipeTransform {

  constructor(
    private vimeoService: VimeoService,
  ) {}

  transform(value: string, ...args: unknown[]): unknown {
    console.log('video', this.vimeoService.getFile(value));
    return this.vimeoService.getFile(value);
  }

}
