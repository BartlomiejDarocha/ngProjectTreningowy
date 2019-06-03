import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateListCompoComponent } from './date-list-compo.component';

describe('DateListCompoComponent', () => {
  let component: DateListCompoComponent;
  let fixture: ComponentFixture<DateListCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateListCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateListCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
