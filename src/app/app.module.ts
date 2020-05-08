import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BreakSetupComponent } from './break-setup/break-setup.component';
import { SessionSetupComponent } from './session-setup/session-setup.component';
import { DisplayComponent } from './display/display.component';
import { ControlsComponent } from './controls/controls.component';
import { BeeperComponent } from './beeper/beeper.component';
import { SetupComponent } from './setup/setup.component';

@NgModule({
  declarations: [
    AppComponent,
    BreakSetupComponent,
    SessionSetupComponent,
    DisplayComponent,
    ControlsComponent,
    BeeperComponent,
    SetupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
