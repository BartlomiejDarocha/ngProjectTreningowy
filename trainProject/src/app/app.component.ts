import { Component } from '@angular/core';
import { Task } from './models/task';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  lookingList: Array<Task> = [];
  constructor(
    private main: MainService
  ) {}
  handlerLookignList(lookingListFromEmit: Array<Task>) {
    this.lookingList = lookingListFromEmit;
  }
  public testGET(): void {
    this.main.getStarWars().subscribe(data => {
      console.log(data, 'data');
    });
  }
}


