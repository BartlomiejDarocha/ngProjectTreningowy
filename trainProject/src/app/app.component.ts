import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'trainProject';
  mainTasks = ['ania', 'alicja', 'aga', 'aneta', 'magda', 'krystyna'];
  doneTasks = [];
  lookingList = [];
  searchingText = '';
  handlerLookignList(lookingList: Array<string>) {
    this.lookingList = lookingList;
  }
  hadnlerAddTask(task: string) {
    if (typeof task !== 'undefined') {
      this.mainTasks.push(task);
    }
  }
  deleteTask(index: number) {
    this.mainTasks.splice(index, 1);

  }
  doneTaskHandler(taskData: any) {
    this.deleteTask(taskData.index);
    this.doneTasks.push(taskData.emitTask);

  }
  filterHandler(task: string) {
    this.mainTasks = this.mainTasks.filter((e) => e !== task);

  }
  clearListHandler() {
    this.mainTasks = this.mainTasks.concat(this.doneTasks);
    this.doneTasks = [];
  }

}


