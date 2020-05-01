import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-break-setup',
  templateUrl: './break-setup.component.html',
  styleUrls: ['./break-setup.component.scss']
})
export class BreakSetupComponent {

  @Input() breakLength: number
  @Output() update = new EventEmitter<number>()

  onDecrement() {
    if (this.breakLength > 1) this.update.emit(this.breakLength - 1)
  }
  
  onIncrement() {
    if (this.breakLength < 60) this.update.emit(this.breakLength + 1)
  }
}
