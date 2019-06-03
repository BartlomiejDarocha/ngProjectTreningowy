import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-list-compo',
  templateUrl: './date-list-compo.component.html',
  styleUrls: ['./date-list-compo.component.less']
})
export class DateListCompoComponent implements OnInit {

  dateList = [
    '03.06.2019 23:28',
    '12.03.2018 10:25',
    '13.04.2019 11:30',
    '20.05.2018 20:25',
    '03.06.2019 16:18',
    '03.06.2019 23:12',
    '03.06.2019 08:10'
  ];
  constructor() { }
  ngOnInit() {
  }

}
