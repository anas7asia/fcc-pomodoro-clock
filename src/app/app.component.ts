import { Component } from '@angular/core';
import { TimerSetup } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pomodoro-clock';

  breakLength = TimerSetup.defaultBreakLength
  sessionLength = TimerSetup.defaultSessionLength
  isRunning = false
  isSession = true
  timeLeft: number = this.translateToSeconds(this.sessionLength)
  timer // timeout - interval id

  updateBreakLength(minutes: number) {
    this.breakLength = minutes
  }

  updateSessionLength(minutes: number) {
    this.sessionLength = minutes
    this.timeLeft = this.translateToSeconds(minutes)
  }

  pressStart() {
    this.isRunning ? 
      clearInterval(this.timer) :
      this.launchTimer()
    this.isRunning = !this.isRunning
  }

  reset() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = undefined
    }
    this.breakLength = TimerSetup.defaultBreakLength
    this.sessionLength = TimerSetup.defaultSessionLength
    this.timeLeft = this.translateToSeconds(this.sessionLength)
    this.isRunning = false
    this.isSession = true
  }

  private launchTimer() {
    this.timer = setInterval(() => {
      --this.timeLeft

      if (this.timeLeft === 0) {
        // wait 1 second to update displayed clock in appropriate time 
        setTimeout(() => {
          this.isSession = !this.isSession
          this.timeLeft = this.translateToSeconds(this.isSession ? this.sessionLength : this.breakLength)
        }, 1000);
      }
    }, 1000);
  }

  private translateToSeconds(minutes: number): number {
    return minutes * 60;
  }
}
