import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimeIntervalComponent } from './components/time-interval/time-interval.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TimeIntervalComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo';
}
