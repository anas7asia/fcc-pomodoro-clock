import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TimerSetup } from '../constants';

@Component({
  selector: 'app-break-setup',
  templateUrl: './break-setup.component.html',
  styleUrls: ['./break-setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreakSetupComponent {

  @Input() breakLength: number
  @Output() update = new EventEmitter<number>()

  onDecrement() {
    if (this.breakLength > TimerSetup.minValue) this.update.emit(this.breakLength - 1)
  }
  
  onIncrement() {
    if (this.breakLength < TimerSetup.maxValue) this.update.emit(this.breakLength + 1)
  }
}
