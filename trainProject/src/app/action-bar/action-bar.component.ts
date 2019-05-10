import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';

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

  model;
  ng2date;

  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'MMM D[,] YYYY',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd',
    firstCalendarDay: 1, // 0 - Sunday, 1 - Monday
    locale: frLocale,
    // minDate: new Date(Date.now()), // Minimal selectable date
    // maxDate: new Date(Date.now()),  // Maximal selectable date
    barTitleIfEmpty: 'Click to select a date',
    placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
    addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
    addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
    fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
    useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown
  };

  constructor() { }

  ngOnInit() {
    //this.checkDublitaceTable();
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
