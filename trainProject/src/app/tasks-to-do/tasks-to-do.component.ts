import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks-to-do',
  templateUrl: './tasks-to-do.component.html',
  styleUrls: ['./tasks-to-do.component.less']
})
export class TasksToDoComponent implements OnInit {
  constructor() { }
  @Input()
  tasks;
  @Output()
  deleteTaskIndex = new EventEmitter<string>();
  @Output()
  doneTaskObj = new EventEmitter<any>();
  @Output()
  emitFilterTask = new EventEmitter<string>();
  ngOnInit() {
  }
  deleteTask(i) {
    this.deleteTaskIndex.emit(i);
  }
  donetask(task, i) {
    this.doneTaskObj.emit({index: i, emitTask: task});
  }
  filterTask(task:string){
    this.emitFilterTask.emit(task);
  }

}
