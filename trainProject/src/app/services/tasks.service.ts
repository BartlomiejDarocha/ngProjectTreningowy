import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TasksService {
  private mainTasks: Array<string> = []; //private bo wiadomo to jest serwis wiec nie chcemy zeby pola bylu publiczne
  private doneTasks: Array<string> = [];

  private tasksListObs = new BehaviorSubject<Array<string>>(this.mainTasks); // musi zostac odrazu zainicjalizowanony zeby działa poprawnie
  private tasksDoneObs = new BehaviorSubject<Array<string>>(this.mainTasks);


  constructor() {
    this.mainTasks = ['ania', 'alicja', 'aga', 'aneta', 'magda', 'krystyna'];
    this.tasksListObs.next(this.mainTasks);
  }

  hadnlerAddTask(task: string) {
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
  doneTaskHandler(taskData: any) {
    this.doneTasks.push(taskData.emitTask);
    this.deleteTask(taskData.index);
    this.tasksDoneObs.next(this.doneTasks); // jak wyzej ale tym razem doneList
  }
  filterHandler(task: string) {
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
  getTaskListObs(): Observable<Array<string>> {
    return this.tasksListObs.asObservable();
  }
  getTaskDoneObs(): Observable<Array<string>> {
    return this.tasksDoneObs.asObservable();
  }

}
