import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TimerSetup } from '../constants';

@Component({
  selector: 'app-session-setup',
  templateUrl: './session-setup.component.html',
  styleUrls: ['./session-setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionSetupComponent {

  @Input() sessionLength: number
  @Output() update = new EventEmitter<number>()

  onDecrement() {
    if (this.sessionLength > TimerSetup.minValue) this.update.emit(this.sessionLength - 1)
  }
  
  onIncrement() {
    if (this.sessionLength < TimerSetup.maxValue) this.update.emit(this.sessionLength + 1)
  }
}
