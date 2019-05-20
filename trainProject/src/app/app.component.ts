import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  lookingList: Array<string> = [];
  mainTasks: Array<string> = [];
  constructor(private taskService: TasksService) {
    this.taskService.getTaskListObs().subscribe((Tasks: Array<string>) => {
      this.mainTasks = Tasks;
    });
  }
  handlerLookignList(lookingList: Array<string>) {
    this.lookingList = lookingList;
  }


}


