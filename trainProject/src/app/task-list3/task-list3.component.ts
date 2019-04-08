import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list3',
  templateUrl: './task-list3.component.html',
  styleUrls: ['./task-list3.component.less']
})
export class TaskList3Component implements OnInit {
  constructor() { }
  task: string = '';
  tasksList: Array <string> = [];
  taskDone: Array <string> = [];

  addNewTask() {
    this.tasksList.push(this.task);
    this.task = '';
  }
  deleteTask(event) {
    let templist = this.tasksList.slice();
    let id = event.target.id;
    templist.splice(id, 1);
    this.tasksList  = templist;
  }
  doneTask(task, event) {
    this.taskDone.push(task);
    this.deleteTask(event);
  }
  ngOnInit() {
  }

}
