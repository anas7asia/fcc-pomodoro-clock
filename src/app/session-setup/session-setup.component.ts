import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SetupComponent } from '../setup/setup.component';

@Component({
  selector: 'app-session-setup',
  templateUrl: './session-setup.component.html',
  styleUrls: ['./session-setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionSetupComponent extends SetupComponent {}
