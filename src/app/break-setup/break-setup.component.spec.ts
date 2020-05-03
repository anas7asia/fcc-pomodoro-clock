import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TimerSetup } from '../constants';

import { BreakSetupComponent } from './break-setup.component';

describe('BreakSetupComponent', () => {
  let comp: BreakSetupComponent;
  let fixture: ComponentFixture<BreakSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakSetupComponent);
    comp = fixture.componentInstance;
    comp.breakLength = TimerSetup.defaultBreakLength
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  // certain ids are required by freecodecamp assignment
  it('should create break label', ()=> {
    expect(fixture.nativeElement.querySelector('#break-label')).toBeTruthy();
  })

  it('should render break title', () => {
    expect(fixture.nativeElement.querySelector('#break-label').textContent).toContain('Break Length');
  });

  it('should create break value', ()=> {
    expect(fixture.nativeElement.querySelector('#break-length')).toBeTruthy();
  });

  it('should create break decrement button', ()=> {
    expect(fixture.nativeElement.querySelector('#break-decrement')).toBeTruthy();
  });

  it('should create break increment button', ()=> {
    expect(fixture.nativeElement.querySelector('#break-increment')).toBeTruthy();
  });
  
  it('should have default break length value', () => {
    expect(fixture.debugElement.query(By.css('#break-length')).properties.innerText).toBe(`${TimerSetup.defaultBreakLength}`);
  });
  
  it('should decrement break length value on decrement button click', () => {
    comp.update.subscribe(newBreakLength => comp.breakLength = newBreakLength);
    fixture.debugElement.query(By.css('#break-decrement')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#break-length')).properties.innerText).toBe(`${TimerSetup.defaultBreakLength - 1}`);
  })
  
  it('should increment break length value on increment button click', () => {
    comp.update.subscribe(newBreakLength => comp.breakLength = newBreakLength);
    fixture.debugElement.query(By.css('#break-increment')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#break-length')).properties.innerText).toBe(`${TimerSetup.defaultBreakLength + 1}`);
  });
  
  it('should keep break value between 1 and 60', () => {
    comp.update.subscribe(newBreakLength => comp.breakLength = newBreakLength);
    
    comp.breakLength = TimerSetup.minValue;
    fixture.debugElement.query(By.css('#break-decrement')).triggerEventHandler('click', null);
    expect(comp.breakLength).toBe(TimerSetup.minValue);

    comp.breakLength = TimerSetup.maxValue;
    fixture.debugElement.query(By.css('#break-increment')).triggerEventHandler('click', null);
    expect(comp.breakLength).toBe(TimerSetup.maxValue);
  });

});
