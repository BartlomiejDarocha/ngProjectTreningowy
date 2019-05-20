import { Component, OnInit} from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks-to-done',
  templateUrl: './tasks-to-done.component.html',
  styleUrls: ['./tasks-to-done.component.less']
})
export class TasksToDoneComponent implements OnInit {
  tasksListDone: Array <string> = [];
  constructor(private taskService: TasksService) {
    this.taskService.getTaskDoneObs().subscribe((doneTasks: Array<string>) => {
      this.tasksListDone = doneTasks;
    });
  }
  ngOnInit() {
  }
  removeAll() {
    this.taskService.clearListHandler(); // dzialnie na metodach z servius
  }

}
