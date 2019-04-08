import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Tasklist2Component } from './tasklist2/tasklist2.component';
import { TaskList3Component } from './task-list3/task-list3.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksToDoComponent } from './tasks-to-do/tasks-to-do.component';
import { TasksToDoneComponent } from './tasks-to-done/tasks-to-done.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    Tasklist2Component,
    TaskList3Component,
    AddTaskComponent,
    TasksToDoComponent,
    TasksToDoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
