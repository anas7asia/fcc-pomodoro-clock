import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-beeper',
  templateUrl: './beeper.component.html',
  styleUrls: ['./beeper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeeperComponent {

  @ViewChild('beeper') private beeper

  play() {
    this.beeper.nativeElement.play()
  }

  reset() {
    this.beeper.nativeElement.pause()
    this.beeper.nativeElement.currentTime = 0
  }

}
