import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlsComponent {

  @Input() isRunning: boolean = false // default value needed to initialize aria-pressed attribute
  @Output() reset = new EventEmitter<void>()
  @Output() pressStart = new EventEmitter<void>()

}
