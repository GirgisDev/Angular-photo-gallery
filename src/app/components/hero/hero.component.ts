import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gallery-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Output() searchValue: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  emitSearch(value) {
    this.searchValue.emit(value);
  }

}
