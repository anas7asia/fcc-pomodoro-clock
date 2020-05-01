import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-session-setup',
  templateUrl: './session-setup.component.html',
  styleUrls: ['./session-setup.component.scss']
})
export class SessionSetupComponent {

  @Input() sessionLength: number
  @Output() update = new EventEmitter<number>()

  onDecrement() {
    if (this.sessionLength > 1) this.update.emit(this.sessionLength - 1)
  }
  
  onIncrement() {
    if (this.sessionLength < 60) this.update.emit(this.sessionLength + 1)
  }
}
