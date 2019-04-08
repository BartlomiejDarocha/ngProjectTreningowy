import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks-to-do',
  templateUrl: './tasks-to-do.component.html',
  styleUrls: ['./tasks-to-do.component.less']
})
export class TasksToDoComponent implements OnInit {
  @Input()
  tasks = [];
  @Output()
  spliceId = new EventEmitter <number>();
  @Output()
  doneTask = new EventEmitter <any>();
  constructor() { }

  ngOnInit() {
  }
  deleteTask(event) {
    let id = event.target.id;
    this.spliceId.emit(id);
  }
  doneTaskHand(task, event) {
    let id = event.target.id;
    this.doneTask.emit({emitDoneTask: task, emitId: id});
  }

}
