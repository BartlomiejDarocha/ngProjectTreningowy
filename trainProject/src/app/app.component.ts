import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'trainProject';
  mainCompTask = [];
  mainCompTaskDone = [];

  addhandler(taskFromChild: string): void {
    this.mainCompTask.push(taskFromChild);
  }
  deleteHandler(idFormChidl: number): void {
    this.mainCompTask.splice(idFormChidl, 1);
  }
  doneTaskHander(dataFromChild: any): void {
    this.deleteHandler(dataFromChild.emitId);
    this.mainCompTaskDone.push(dataFromChild.emitDoneTask);
  }
 }


