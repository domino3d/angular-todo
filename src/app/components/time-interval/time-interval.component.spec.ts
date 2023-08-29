import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeIntervalComponent } from './time-interval.component';

describe('TimeIntervalComponent', () => {
  let component: TimeIntervalComponent;
  let fixture: ComponentFixture<TimeIntervalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeIntervalComponent]
    });
    fixture = TestBed.createComponent(TimeIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
