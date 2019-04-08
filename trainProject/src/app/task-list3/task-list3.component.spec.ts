import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskList3Component } from './task-list3.component';

describe('TaskList3Component', () => {
  let component: TaskList3Component;
  let fixture: ComponentFixture<TaskList3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskList3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
