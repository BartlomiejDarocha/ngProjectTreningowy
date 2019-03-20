import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.less']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  task: string;
  tasklist: Array<string> = [];
  doneTaskList: Array<string> = [];

  addTask() {
    this.tasklist.push(this.task);
    this.task = '';
  }
  removeTaskFiltr(task: string) {
    this.tasklist = this.tasklist.filter(e => e !== task);
  }
  doneTask(task: string) {
    this.doneTaskList.push(task);
    this.removeTaskFiltr(task);
  }
  removreTaskId(event) {
    let id = event.target.id;
    this.tasklist.splice(id, 1);
  }
  doneTaskSemi(task, event) {
    this.doneTaskList.push(task);
    this.removreTaskId(event);
  }
}
