import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';

import { ControlsComponent } from './controls.component';

describe('ControlsComponent', () => {
  let comp: ControlsComponent;
  let fixture: ComponentFixture<ControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.overrideComponent(ControlsComponent, {add: {changeDetection: ChangeDetectionStrategy.Default}})
    fixture = TestBed.createComponent(ControlsComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  // certain ids are required by freecodecamp assignment
  it('should have a start/pause control', () => {
    expect(fixture.debugElement.query(By.css('#start_stop')).nativeElement).toBeTruthy();
  });

  it('should have a reset control', () => {
    expect(fixture.debugElement.query(By.css('#reset')).nativeElement).toBeTruthy();
  })

  it('should raise reset event when reset button triggered', () => {
    let isTriggered = false;
    comp.reset.subscribe(() => isTriggered = true);
    fixture.debugElement.query(By.css('#reset')).triggerEventHandler('click', null);
    expect(isTriggered).toBeTrue();
  });
  
  it('should change state when start button is pressed', () => {
    const startStopButton = fixture.debugElement.query(By.css('#start_stop'));
    comp.pressStart.subscribe(() => comp.isRunning = !comp.isRunning);

    startStopButton.triggerEventHandler('click', null);
    expect(comp.isRunning).toBeTrue();

    startStopButton.triggerEventHandler('click', null);
    expect(comp.isRunning).toBeFalse();
  });

  it('should update aria-pressed attribute', () => {
    const startStopBtn = fixture.debugElement.query(By.css('#start_stop')).nativeElement;
    expect(startStopBtn.getAttribute('aria-pressed')).toBe('false');
    
    comp.isRunning = true;
    fixture.detectChanges();
    expect(startStopBtn.getAttribute('aria-pressed')).toBe('true');

    comp.isRunning = false;
    fixture.detectChanges();
    expect(startStopBtn.getAttribute('aria-pressed')).toBe('false');
  });
});
