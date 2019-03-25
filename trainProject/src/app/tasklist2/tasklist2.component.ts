import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist2',
  templateUrl: './tasklist2.component.html',
  styleUrls: ['./tasklist2.component.less']
})
export class Tasklist2Component implements OnInit {
  constructor() { }
  doneList: Array <string> = [];
  taskList: Array <string> = [];
  task: string = '';
  ngOnInit() {
  }
  addHandler() {
    this.taskList.push(this.task);
    this.task = '';
  }
  delete(event) {
    let id = event.target.id;
    this.taskList.splice(id, 1);
  }
  done(item, event) {
    this.doneList.push(item);
    this.delete(event);
  }
}
