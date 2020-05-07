import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-beeper',
  templateUrl: './beeper.component.html',
  styleUrls: ['./beeper.component.scss']
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
