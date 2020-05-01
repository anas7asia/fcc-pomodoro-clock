import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pomodoro-clock';

  breakLength = 5
  sessionLength = 25
  isRunning = false

  updateBreakLength(value: number) {
    this.breakLength = value
  }

  updateSessionLength(value: number) {
    this.sessionLength = value
  }

  pressStart() {
    this.isRunning = !this.isRunning
  }

  reset() {}
}
