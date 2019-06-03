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
import { TasksService } from './services/tasks.service';
import { CheckedDirective } from './shared/checked.directive';
import { BgColorRedDirective } from './shared/bg-color-red.directive';
import { DateDirective } from './shared/date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { DateListCompoComponent } from './date-list-compo/date-list-compo.component';
import { DataShowerPipe } from './shared/data-shower.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TasksToDoComponent,
    TasksToDoneComponent,
    ActionBarComponent,
    CheckedDirective,
    BgColorRedDirective,
    DateDirective,
    TransformTaskPipe,
    DateListCompoComponent,
    DataShowerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgDatepickerModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
