import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimeIntervalComponent } from './components/time-interval/time-interval.component';
import { FormsModule } from '@angular/forms';
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
  title = 'angular-todo';

  time = 123;
  updated = "";

  updateTime(time: any) {
    this.updated = time;
  }
}
