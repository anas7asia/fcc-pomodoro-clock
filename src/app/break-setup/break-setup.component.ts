import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SetupComponent } from '../setup/setup.component';

@Component({
  selector: 'app-break-setup',
  templateUrl: './break-setup.component.html',
  styleUrls: ['./break-setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreakSetupComponent extends SetupComponent {}
