import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskList3Component } from '../task-list3/task-list3.component';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.less']
})
export class ActionBarComponent implements OnInit {
  testTable = ['ania','ania','alicja','aga','aneta','aga','magda', 'krystyna','alicja'];
  testTable2 = [];
  @Input()
  TaskList: Array<string>;
  lookingTask = '';
  @Output()
  emitLookingTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.checkDublitaceTable(this.testTable);
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
  checkDublitaceTable(table) {
    let dublicated = false;
    for (let index = 0; index < table.length; index++) {
      let tempName = table[index];
      for (let i = index; i < table.length; i++) {
        if(table[i + 1] === tempName) {
          this.testTable2.push(table[i + 1]);
          dublicated = true;
        }
      }
    }
    if(dublicated){
      console.log('dublicted:');
      this.testTable2.forEach(element => {
        console.log('- ' + element);
      });
    } else {
      console.log('not dublicated element');
    }

  }
}
