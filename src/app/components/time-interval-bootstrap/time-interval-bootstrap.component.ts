import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Injectable, Input, Output, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { NgbTimeAdapter, NgbTimepickerModule, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

/**
 * String Time adapter
*/
@Injectable()
export class NgbTimeNumAdapter extends NgbTimeAdapter<number> {
  // from number to struct
  fromModel(seconds: number | null): NgbTimeStruct | null {
    if (!seconds) {
      return null;
    }
    const dateString = new Date(seconds * 1000).toISOString().substring(11, 19);;
    const split = dateString.split(':');
    return {
      hour: parseInt(split[0], 10),
      minute: parseInt(split[1], 10),
      second: parseInt(split[2], 10),
    };
  }

  // from struct to number
  toModel(time: NgbTimeStruct | null): number | null {
    return time != null ? Number(time.hour) * 3600 + Number(time.minute) * 60 + Number(time.second) : null;
  }
}

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, NgbTimepickerModule, forwardRef(() => AppComponent)],
  providers: [{ provide: NgbTimeAdapter, useClass: NgbTimeNumAdapter }],
  selector: 'time-interval-bootstrap',
  templateUrl: './time-interval-bootstrap.component.html',
  styleUrls: ['./time-interval-bootstrap.component.scss']
})
export class TimeIntervalBootstrapComponent {
  @Input('setTime') time: number | undefined;
  @Output() updateTime: EventEmitter<number> = new EventEmitter<number>();

  timeChanged(time: number) {
    this.updateTime.emit(time);
  }
}

