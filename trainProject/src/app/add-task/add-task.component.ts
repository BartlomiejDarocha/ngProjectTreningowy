import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.less']
})
export class AddTaskComponent implements OnInit {
  constructor(private taskService: TasksService) { }
  task = '';
  ngOnInit() {
  }
  addTask() {
    const task: Task = ({ name: this.task, created: new Date() });
    if (this.task.length > 0) {
      this.taskService.hadnlerAddTask(task); // dzialnie na metodach z servius
      this.task = '';
    }
  }
}
