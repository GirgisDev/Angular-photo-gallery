import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'gallery-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  searchCalled: boolean = false;
  @Output() searchValue: EventEmitter<any> = new EventEmitter();
  @Input('noSearch') noSearch: boolean;
  constructor() { }

  ngOnInit() {
  }

  emitSearch(value) {
    if (value) {
      this.searchCalled = true;
      this.searchValue.emit(value);
    } else {
      this.searchCalled = false;
      this.searchValue.emit('');
    }
  }

}
