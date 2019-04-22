import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks-to-done',
  templateUrl: './tasks-to-done.component.html',
  styleUrls: ['./tasks-to-done.component.less']
})
export class TasksToDoneComponent implements OnInit {
  @Input()
  tasks;
  constructor() { }
  @Output()
  clearList = new EventEmitter <any>();
  ngOnInit() {
  }
  removeAll() {
    this.clearList.emit();
  }

}
