import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent {

  @Input() set timeLeft(seconds: number) {
    this._timeLeft = this.formatToMMSS(seconds)
  }
  @Input() isSession: boolean = true
  _timeLeft: string

  private formatToMMSS(seconds: number): string {
    const transformToStr = (num: number) => num > 9 ? num : `0${num}`
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${transformToStr(mins)}:${transformToStr(secs)}`
  }

}
