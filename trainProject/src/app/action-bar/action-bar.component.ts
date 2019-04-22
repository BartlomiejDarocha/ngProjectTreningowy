import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskList3Component } from '../task-list3/task-list3.component';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.less']
})
export class ActionBarComponent implements OnInit {
  @Input()
  TaskList: Array<string>;
  lookingTask = '';
  @Output()
  emitLookingTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  textHandler() {
    this.emitLookingTask.emit(this.lookingTask);
  }
  sortUp() {
    this.TaskList.sort();
  }
  sortDown() {
    this.TaskList.sort();
    this.TaskList.reverse();
  }

}
