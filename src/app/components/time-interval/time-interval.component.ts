import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output, SimpleChanges, WritableSignal, forwardRef, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, forwardRef(() => AppComponent)],
  selector: 'time-interval',
  templateUrl: './time-interval.component.html',
  styleUrls: ['./time-interval.component.scss']
})
export class TimeIntervalComponent {
  @Input('setTime') time: number = 3;
  @Output() updateTime = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    // this.timeSignal.set(this.time);
    console.log("2 this.time: ", this.time);
  }

  // timeSignal = signal(2);

  constructor() {
    console.log("1 this.time: ", this.time);
    // signal(this.time);
  }
  
  timeChanged(time: any) {
    console.log("3 change: ", time);
    this.updateTime.emit(this.time);
  }

}

