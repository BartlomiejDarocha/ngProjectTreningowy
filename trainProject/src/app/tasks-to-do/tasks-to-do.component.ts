import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks-to-do',
  templateUrl: './tasks-to-do.component.html',
  styleUrls: ['./tasks-to-do.component.less'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TasksToDoComponent implements OnInit {
  tasksList: Array <string> = [];
  constructor(private taskService: TasksService) {
    // bierzmey tasksServise bierzmey ListOBs potem ssubskrybcja i przypisanie do zmiennej
    this.taskService.getTaskListObs().subscribe((tasks: Array<string>) => {
      this.tasksList = tasks;
    });
  }
  ngOnInit() {
  }
  deleteTask(i) {
    this.taskService.deleteTask(i); // dzialnie na metodach z servius
  }
  donetask(task, i) {
    this.taskService.doneTaskHandler({ index: i, emitTask: task }); // dzialnie na metodach z servius
  }
  filterTask(task: string) {
    this.taskService.filterHandler(task); // dzialnie na metodach z servius
  }
  getColor(): string {
    return this.tasksList.length <= 1 ? 'green' : 'red';
  }

}
