import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PageService } from 'src/app/services/page.service';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  tags: any = [];
  levels: any = ['Beginner', 'Intermediate', 'Advanced'];
  categories: any = [ { name: 'Singles' }, { name: 'Doubles' }, { name: 'Mixed doubles' } ];
  selectedCategories: any = {};
  selectedLevels: any = {};
  selectedTags: any = {};
  loading: boolean = false;
  categoriesByName: any = {};
  filteredResult: any;
  hidenSearch: boolean;
  displayCount: number = 5;
  currentPage: number = 1;
  allRecords: any = [];
  pagesRoutesById: any = [];
  selectedTagLength: number = 0;

  constructor(
    public tagsService: TagsService,
    public pageService: PageService,
    public toast: ToastController
  ) { }

  ngOnInit() {
    let temp = window.localStorage.getItem('tags');
    if(temp) {
      this.tags = JSON.parse(temp);
    }

    temp = window.localStorage.getItem('categoriesByName');;
    if(temp) {
      this.categoriesByName = JSON.parse(temp);
    }

    this.tagsService.getTags(1, 100).subscribe((res: any) => {
      const tempRecords = [];

      for(let record of res) {
        tempRecords.push({
          name: record.name,
          id: record.id
        });
      }
      this.tags = tempRecords;
      window.localStorage.setItem('tags', JSON.stringify(this.tags));
    });

    this.tagsService.getCategories().subscribe((res: Array<any>) => {
      for(let cat of res) {
        this.categoriesByName[cat.name] = cat;
      }

      window.localStorage.setItem('categoriesByName', JSON.stringify(this.categoriesByName));
    });
  }

  toggleCategory(cat: string) {
    const res = !this.selectedCategories[cat];
    
    for(let i in this.selectedCategories) {
      this.selectedCategories[i] = false;
    }

    this.selectedCategories[cat] = res;
  }

  toggleLevel(level: string) {
    const res = !this.selectedLevels[level];

    for(let i in this.selectedLevels) {
      this.selectedLevels[i] = false;
    }

    this.selectedLevels[level] = res;
  }

  toggleTag(tagId: number) {
    this.selectedTags[tagId] = !this.selectedTags[tagId];
  }

  async search() {
    if(this.loading) {
      return ;
    }

    const valid = await this.isValid();

    if(!valid) {
      return ;
    }

    this.loading = true;

    const tempTags = [];
    for(let i in this.selectedTags) {
      if(this.selectedTags[i]) {
        tempTags.push(i);
      }      
    }
    this.selectedTagLength = tempTags.length;

    const tempCats = [];
    for(let i in this.selectedCategories) {
      if(this.selectedCategories[i] && this.categoriesByName[i]) {
        tempCats.push(this.categoriesByName[i].id);
      }
    }

    let levelsNotSelected = true;
    for(let i in this.selectedLevels) {
      if(this.selectedLevels[i]) {
        levelsNotSelected = false;
      }
    }



    const query = {
      categories: tempCats.join(','),
      tags: tempTags.join(',')
    };

    if(!query.tags) {
      delete query.tags;
    }

    if(!query.categories) {
      delete query.categories;
    }

    this.handleQuery(query, levelsNotSelected);
  }

  handleQuery(query, levelsNotSelected, previousPage = 1, previousRes = []) {
    this.pageService.getPagesByQuery(query, previousPage, 100).subscribe((queryRes: any) => {
      const res = [...previousRes, ...queryRes];
      const tempRes = [];
      
      for(let page of res) {
        const temp = page;
        try {
          temp.excerpt = this.pageService.parsePureExcerpt(page.pure_excerpt)
        } catch(e) {
          // Must not be the case at all
          temp.excerpt = {};
        }

        if(temp.parent) {
          temp.parent = this.pageService.mainPagesById[temp.parent];
        }

        if(!levelsNotSelected) {
          if(temp.excerpt.category && this.selectedLevels[temp.excerpt.category]) {
            if(this.compareTags(temp.tags)) {
              tempRes.push(temp);
            }
          }
        } else {
          if(this.compareTags(temp.tags)) {
            tempRes.push(temp);
          }
        }
        
      }

      // Putting limit to 4 so we don't load more than 300 records from db
      if(queryRes.length === 100 && previousPage < 4) {
        return this.handleQuery(query, levelsNotSelected, previousPage + 1, tempRes);
      }

      this.loading = false;
      this.allRecords = tempRes;
      this.filteredResult = this.allRecords.slice(0, this.displayCount);
      this.hidenSearch = true;
    })
  }

  async isValid() {
    let isValid = false;
    
    for(let i in this.selectedCategories) {
      if(this.selectedCategories[i]) {
        isValid = true;
        break;
      }
    }
    
    const toastOps: any = {
      color: 'danger',
      position: 'bottom',
      duration: 2500,
      message: 'No item is selected',
    }

    for(let i in this.selectedLevels) {
      if(this.selectedLevels[i]) {
        isValid = true;
        break;
      }
    }

    for(let i in this.selectedTags) {
      if(this.selectedTags[i]) {
        isValid = true;
        break;
      }
    }

    if(!isValid) {
      const toast = await this.toast.create(toastOps);

      toast.present();

      this.loading = false;

      return false;
    }

    return true;
  }

  loadMore() {
    this.displayCount += 5;
    
    if(this.displayCount == this.allRecords.length) {
      this.currentPage++;
    }

    this.filteredResult = this.allRecords.slice(0, this.displayCount);
  }

  /**
   * Comparing given tags to selected ones to make sure all selected tags are present
   * @param tags arrray of tags
   */
  compareTags(tags: any[]) {
    if(!this.selectedTagLength) {
      return true;
    }

    let totalTagCount = 0;

    for(let tagId of tags) {
      if(this.selectedTags[tagId]) {
        totalTagCount++;
      }
    }

    if(this.selectedTagLength == totalTagCount) {
      return true;
    }

    return false;
  }

}
