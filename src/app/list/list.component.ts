import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() dataList;
  @Input() title;
  @Output() favoriteToggle: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  favoriteFunc(id: number): void {
    this.favoriteToggle.emit(id);
  };
}
