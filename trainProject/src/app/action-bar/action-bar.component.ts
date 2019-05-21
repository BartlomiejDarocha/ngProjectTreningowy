import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import * as plLocale from 'date-fns/locale/pl';
import { Task } from '../models/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.less']
})
export class ActionBarComponent implements OnInit {
  taskList: Array<Task>;
  @Output()
  emitLookingList = new EventEmitter<Array<Task>>();
  lookingTask = '';
  model;
  newDatapicekr;

  constructor(private taskService: TasksService) {
    this.taskService.getTaskListObs().subscribe((tasks: Array<Task>) => {
      this.taskList = tasks;
    });
  }
  optionsTwo: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'DD.MM.YYYY',
    barTitleFormat: 'DD.MM.YYYY',
    dayNamesFormat: 'dd',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    locale: plLocale,
    // minDate: new Date(Date.now()), // Minimal selectable date
    // maxDate: new Date(Date.now()),  // Maximal selectable date
    barTitleIfEmpty: '',
    placeholder: 'wybierz datę Druga', // HTML input placeholder attribute (default: '')
    addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
    addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
    fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
    useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown
  };

  ngOnInit() {
  }

  textHandler() {
    let lookingTasklist = this.taskList;
    if (this.taskList.length > 0) {
      lookingTasklist = lookingTasklist.filter((itemList) => {
        return itemList.name.substring(0, this.lookingTask.length) === this.lookingTask;
      });
      if (this.lookingTask === '') {
        lookingTasklist = [];
      }
    }
    this.emitLookingList.emit(lookingTasklist);
  }
  sortUp() {
    this.taskList.sort();
  }
  sortDown() {
    this.taskList.sort();
    this.taskList.reverse();
  }
  // checkDublitaceTable() {
  //   let dublicated = false;
  //   for (let index = 0; index < this.testTable.length; index++) {
  //     const tempName = this.testTable[index];
  //     console.log(index, ' first itaration ' + tempName);
  //     for (let i = index; i < this.testTable.length; i++) {
  //       console.log(this.testTable[i] + '===' + tempName + ' sec loop');
  //       if (this.testTable[i + 1] === tempName) {
  //         dublicated = true;
  //         console.log('dublicated is executed');
  //       }
  //     }
  //     console.log('------------');
  //   }
  //   console.log(dublicated, ' -is dublicted');
  // }


}
