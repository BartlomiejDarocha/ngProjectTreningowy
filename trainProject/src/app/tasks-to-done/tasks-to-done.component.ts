import { Component, OnInit} from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-tasks-to-done',
  templateUrl: './tasks-to-done.component.html',
  styleUrls: ['./tasks-to-done.component.less']
})
export class TasksToDoneComponent implements OnInit {
  tasksListDone: Array <Task> = [];
  constructor(private taskService: TasksService) {
    this.taskService.getTaskDoneObs().subscribe((doneTasks: Array<Task>) => {
      this.tasksListDone = doneTasks;
    });
  }
  ngOnInit() {
  }
  removeAll() {
    this.taskService.clearListHandler(); // dzialnie na metodach z servius
  }

}
