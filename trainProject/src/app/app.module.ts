import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksToDoComponent } from './tasks-to-do/tasks-to-do.component';
import { TasksToDoneComponent } from './tasks-to-done/tasks-to-done.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgDatepickerModule } from 'ng2-datepicker';



@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TasksToDoComponent,
    TasksToDoneComponent,
    ActionBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
