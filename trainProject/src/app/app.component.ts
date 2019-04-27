import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'trainProject';
  mainTasks = [];
  doneTasks = [];
  lookingList = [];
  searchingText = '';
  hadnlerAddTask(task: string) {
    if (typeof task !== 'undefined') {
      this.mainTasks.push(task);
    }
  }
  deleteTask(index: number) {
    this.mainTasks.splice(index, 1);
    this.searchControler();
  }
  doneTaskHandler(taskData: any) {
    this.deleteTask(taskData.index);
    this.doneTasks.push(taskData.emitTask);
    this.searchControler();
  }
  filterHandler(task: string) {
    this.mainTasks = this.mainTasks.filter((e) => e !== task);
    this.searchControler();
  }
  clearListHandler() {
    this.doneTasks = [];
    this.searchControler();
  }
  searchControler = () => {
    if (this.mainTasks.length > 0) {
      this.lookingList = this.mainTasks;
      this.lookingList = this.lookingList.filter((e) => e.includes(this.searchingText));
      if(this.searchingText === ''){
        this.lookingList = [];
      }
    } else {
      this.lookingList = [];
    }
  }
  searchHandler(text: string) {
    this.searchingText = text;
    this.searchControler();
  }
}


