import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { SortNamePipe } from './shared/sort-name.pipe';
import { RotationDivComponent } from './rotation-div/rotation-div.component';
import { LevelBarDirective } from './shared/level-bar.directive';
//import { MatDialogModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { MainService } from './services/main.service';
import { Interceptor } from './intercereptor/intercerepotr';



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
    DataShowerPipe,
    SortNamePipe,
    RotationDivComponent,
    LevelBarDirective,
    ErrorDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgDatepickerModule,
    //MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    TasksService,
    MainService,
      { provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
