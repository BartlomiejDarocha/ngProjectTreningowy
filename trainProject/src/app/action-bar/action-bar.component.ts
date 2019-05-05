import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskList3Component } from '../task-list3/task-list3.component';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.less']
})
export class ActionBarComponent implements OnInit {
  testTable = ['ania','alicja','aga','aneta','magda', 'krystyna'];
  @Input()
  TaskList: Array<string>;
  lookingTask = '';
  @Output()
  emitLookingTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.checkDublitaceTable();
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
  checkDublitaceTable() {
    let dublicated = false;
    for (let index = 0; index < this.testTable.length; index++) {
      let tempName = this.testTable[index];
      console.log(index, ' first itaration ' + tempName);
      for (let i = index; i < this.testTable.length; i++) {
        console.log(this.testTable[i] + '===' + tempName + ' sec loop');
        if(this.testTable[i + 1] === tempName) {
          dublicated = true;
          console.log('dublicated is executed');
        }
      }
      console.log('------------');
    }
    console.log(dublicated, ' -is dublicted');
  }

}
