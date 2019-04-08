import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.less']
})
export class AddTaskComponent implements OnInit {
  newTask: string;
  @Output()
  newTaskEmite = new EventEmitter <string>();

  constructor() { }

  ngOnInit() {
  }
  addNewTask(): void {
    this.newTaskEmite.emit(this.newTask);
    this.newTask = '';
  }

}
