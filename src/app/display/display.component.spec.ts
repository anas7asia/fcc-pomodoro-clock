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

  it('should have non-empty timer', () => {
    expect(fixture.debugElement.query(By.css('#timer-left')).nativeElement.innerText).toBeTruthy();
  });

  // TODO(test): check timer displayed in mm:ss format
});
