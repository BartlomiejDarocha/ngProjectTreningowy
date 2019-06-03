import { Component } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  lookingList: Array<Task> = [];
  constructor() {}
  handlerLookignList(lookingListFromEmit: Array<Task>) {
    this.lookingList = lookingListFromEmit;
  }
}


