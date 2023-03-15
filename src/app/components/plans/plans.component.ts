import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {
  selectedTab: string;

  @HostListener('body: click', ['$event'])
  bodyClicked(ev: any) {
    if(ev.target.tagName == 'TEXTAREA') {
      const rect = ev.target;
      // scroling to the element
      setTimeout(() => {
        this.mainContent.scrollToPoint(0, rect.offsetTop - 70);
      }, 1000);
    }
  }

  @ViewChild('mainContent') mainContent: any;

  constructor(
    private favoritesService: FavoritesService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(res => {
      this.openTab(res.tab);
    });
    
    this.favoritesService.getFavorites().subscribe(res => {
      console.log(res);
    });
  }

  openTab(tab: string) {
    this.selectedTab = tab;
  }
}
