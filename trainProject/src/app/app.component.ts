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
  testList = [];
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
    this.doneTasks = [];
  }
  searchHandler(text: string) {
    if (this.mainTasks.length > 0) {
      this.testList = this.mainTasks;
      this.testList = this.testList.filter((e) => e.includes(text)); // zwraca tablice spelniająca warunek funkcji w metodzi filter
      if (text === '') {
        this.testList = [];
      }
    }
  }
}


