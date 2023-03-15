import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Filter {
  name: string;
  selected?: boolean;
}

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {

  @Input() filters: Filter[] = [];
  @Input() selectAll: Boolean = false;
  @Output() fn: EventEmitter<string[]> = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  toggle(filter: Filter): void {
    const index = this.filters.findIndex((ele: Filter) => ele.name === filter.name);
    if (index === -1) return;
    if (this.filters[index].selected) {
      this.filters[index].selected = false;
      if (!this.selectAll)
        return this.fn.emit(null);
      const names = this.filters.filter(x => x.selected === true).map(x => x.name);
      return this.fn.emit(names);
    }
    if (!this.selectAll) {
      this.filters.forEach((ele: Filter) => ele.selected = false);
    }
    this.filters[index].selected = true;
    const names = this.filters.filter(x => x.selected === true).map(x => x.name);
    this.fn.emit(names);
  }

}
