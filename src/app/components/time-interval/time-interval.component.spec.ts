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

  // test for the `time` property to be 123 
  it('should have a time property of 123', () => {
    expect(component.time).toBe(123);
  }
  );
});
