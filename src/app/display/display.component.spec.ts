import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, ChangeDetectionStrategy } from '@angular/core';

import { DisplayComponent } from './display.component';

describe('DisplayComponent', () => {
  let comp: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;
  let label: HTMLElement

  beforeEach(async(() => {
    TestBed.overrideComponent(DisplayComponent, { add: { changeDetection: ChangeDetectionStrategy.Default }});
    TestBed.configureTestingModule({
      declarations: [ DisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayComponent);
    
    comp = fixture.componentInstance;
    fixture.detectChanges();
    label = fixture.debugElement.query(By.css('#timer-label')).nativeElement
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  // certain ids are required by freecodecamp assignment
  it('should have timer label', () => {
    expect(fixture.debugElement.query(By.css('#timer-label'))).toBeTruthy();
  });

  it('should have timer', () => {
    expect(fixture.debugElement.query(By.css('#timer-left'))).toBeTruthy();
  });

  it('should have appropriate label: session or break', () => {
    expect(label.innerText).toBe('Session');

    comp.isSession = false;
    fixture.detectChanges();
    expect(label.innerText).toBe('Break');
    
    comp.isSession = true;
    fixture.detectChanges();
    expect(label.innerText).toBe('Session');
  });

  it('should have non-empty timer in mm:ss format', () => {
    comp.timeLeft = 120; // 2 minutes 0 seconds
    const rgx = /(?:[0-5][0-9]:[0-5][0-9])?/; // matching from 00:00 to 59:59 in mm:ss format

    fixture.detectChanges();
    const timer = fixture.debugElement.query(By.css('#timer-left')).nativeElement.innerText;
    expect(timer).toBeTruthy();
    expect(timer).toMatch(rgx, timer);
    expect(timer).toBe('02:00');
  });
});
