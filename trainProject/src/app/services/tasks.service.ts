import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable()
export class TasksService {
  private mainTasks: Array<Task> = []; //private bo wiadomo to jest serwis wiec nie chcemy zeby pola bylu publiczne
  private doneTasks: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>([]); // musi zostac odrazu zainicjalizowanony zeby działa poprawnie
  private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);


  constructor() {
    this.mainTasks = [
      { name: 'Wioleta', created: new Date() },
      { name: 'ania', created: new Date() },
      { name: 'alicja', created: new Date() },
      { name: 'aga', created: new Date() },
      { name: 'aneta', created: new Date() },
      { name: 'magda', created: new Date() },
      { name: 'krystyna', created: new Date() },
    ];
    this.tasksListObs.next(this.mainTasks);
  }

  hadnlerAddTask(task: Task) {
    if (typeof task !== 'undefined') {
      this.mainTasks.push(task);
      // tslint:disable-next-line:max-line-length
      this.tasksListObs.next(this.mainTasks);  // poza oblsuga listy mainTasks należy tez obsluzyć listę Obs po porzez emintoanwie calej listy a nie pojdeyczniego zadnia
    }
  }
  deleteTask(index: number) {
    this.mainTasks.splice(index, 1);
    this.tasksListObs.next(this.mainTasks); // jak wyzej
  }
  doneTaskHandler(dataObj: any) {
    this.doneTasks.push(dataObj.emitTask);
    this.deleteTask(dataObj.index);
    this.tasksDoneObs.next(this.doneTasks); // jak wyzej ale tym razem doneList
  }
  filterHandler(task: Task) {
    this.mainTasks = this.mainTasks.filter((e) => e !== task);
    this.tasksListObs.next(this.mainTasks); // jak wyżej
  }
  clearListHandler() {
    this.mainTasks = this.mainTasks.concat(this.doneTasks);
    this.doneTasks = [];
    this.tasksListObs.next(this.mainTasks); // jak wyżej
    this.tasksDoneObs.next(this.doneTasks); // jak wyżej
  }
  // te Metody da po by można się było dobrać do tych list czyli najpier po przez next()
  /// pisze metody działające na listach
  // następni przez metody get.. i observable daje się im dostęp dla komponetw
  getTaskListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }
  getTaskDoneObs(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable();
  }

}
