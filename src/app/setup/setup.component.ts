import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TimerSetup } from '../constants';

@Component({
  selector: 'app-setup',
  template: ``
})
export class SetupComponent {

  @Input() length: number
  @Output() update = new EventEmitter<number>()

  onDecrement() {
    if (this.length > TimerSetup.minValue) this.update.emit(this.length - 1)
  }
  
  onIncrement() {
    if (this.length < TimerSetup.maxValue) this.update.emit(this.length + 1)
  }

}
