import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TimeIntervalComponent } from './components/time-interval/time-interval.component';
import { TimeIntervalBootstrapComponent } from './components/time-interval-bootstrap/time-interval-bootstrap.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TimeIntervalComponent,
    TimeIntervalBootstrapComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-todo';

  time: number = 123;
  updated: number | undefined;

  updateTime(time: number) {
    this.updated = time;
  }
}
