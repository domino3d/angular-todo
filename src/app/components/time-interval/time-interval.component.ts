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
  _time!: String;

  /**
   * @required
   */
  @Input('setTime')
  set time(value: number) {
    this._time = this.convertFromSecondsToString(value);
  }
  @Output() updateTime = new EventEmitter<number>();

  timeChanged(time: string) {
    this.convertFromStringToSeconds(time);
    this.updateTime.emit(this.convertFromStringToSeconds(time));
  }

  convertFromSecondsToString(seconds: number) {
    return new Date(seconds * 1000).toISOString().substring(11, 19);
  }

  convertFromStringToSeconds(time: string) {
    let timeArray = time.split(':');
    let seconds = Number(timeArray[0]) * 360 + Number(timeArray[1]) * 60 + Number(timeArray[2]);
    return seconds;
  }

}

