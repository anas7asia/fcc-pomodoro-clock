import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BeeperComponent } from './beeper.component';

describe('BeeperComponent', () => {
  let component: BeeperComponent;
  let fixture: ComponentFixture<BeeperComponent>;
  let beeper: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    beeper = fixture.debugElement.query(By.css('#beep'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have beeper element', () => {
    expect(beeper).toBeTruthy();
    expect(beeper.name).toBe('audio');
  });

  xit('should have audio longer than 1 second', fakeAsync(() => {

  }));

  it('should launch the audio', () => {
    spyOn(beeper.nativeElement, 'play');
    component.play();
    expect(beeper.nativeElement.play).toHaveBeenCalled();
  });
  
  it('should stop playing when reset button is hit', () => {
    spyOn(beeper.nativeElement, 'pause');
    beeper.nativeElement.currentTime = 3;

    component.reset();
    
    expect(beeper.nativeElement.pause).toHaveBeenCalled();
    expect(beeper.nativeElement.currentTime).toBe(0);
  });
});
