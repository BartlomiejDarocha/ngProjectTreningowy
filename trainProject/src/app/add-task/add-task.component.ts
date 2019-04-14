import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.less']
})
export class AddTaskComponent implements OnInit {
  constructor() { }
  task: string = '';
  @Output()
  taskOut =  new EventEmitter <string>();
  ngOnInit() {
  }
  addTask() {
    if(this.task.length > 0) {
      this.taskOut.emit(this.task);
      this.task = '';
    }
  }
}
