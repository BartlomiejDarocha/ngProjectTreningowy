import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tasklist2Component } from './tasklist2.component';

describe('Tasklist2Component', () => {
  let component: Tasklist2Component;
  let fixture: ComponentFixture<Tasklist2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tasklist2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tasklist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
