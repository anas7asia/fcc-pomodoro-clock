import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TimerSetup } from '../constants';

import { SessionSetupComponent } from './session-setup.component';

describe('SessionSetupComponent', () => {
  let comp: SessionSetupComponent;
  let fixture: ComponentFixture<SessionSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionSetupComponent);
    comp = fixture.componentInstance;
    comp.sessionLength = TimerSetup.defaultSessionLength
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  // check elements with required by assignment ids are present
  it('should create session label', ()=> {
    expect(fixture.nativeElement.querySelector('#session-label')).toBeTruthy();
  })

  it('should render session title', () => {
    expect(fixture.nativeElement.querySelector('#session-label').textContent).toContain('Session Length');
  });

  it('should create session value', ()=> {
    expect(fixture.nativeElement.querySelector('#session-length')).toBeTruthy();
  });

  it('should create session decrement button', ()=> {
    expect(fixture.nativeElement.querySelector('#session-decrement')).toBeTruthy();
  });

  it('should create session increment button', ()=> {
    expect(fixture.nativeElement.querySelector('#session-increment')).toBeTruthy();
  });
  
  it('should have default session length value', () => {
    expect(fixture.debugElement.query(By.css('#session-length')).properties.innerText).toBe(`${TimerSetup.defaultSessionLength}`);
  });
  
  it('should decrement session length value on decrement button click', () => {
    comp.update.subscribe(newsessionLength => comp.sessionLength = newsessionLength);
    fixture.debugElement.query(By.css('#session-decrement')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#session-length')).properties.innerText).toBe(`${TimerSetup.defaultSessionLength - 1}`);
  })
  
  it('should increment session length value on increment button click', () => {
    comp.update.subscribe(newsessionLength => comp.sessionLength = newsessionLength);
    fixture.debugElement.query(By.css('#session-increment')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#session-length')).properties.innerText).toBe(`${TimerSetup.defaultSessionLength + 1}`);
  });
  
  it('should keep session value between 1 and 60', () => {
    comp.update.subscribe(newsessionLength => comp.sessionLength = newsessionLength);
    
    comp.sessionLength = TimerSetup.minValue;
    fixture.debugElement.query(By.css('#session-decrement')).triggerEventHandler('click', null);
    expect(comp.sessionLength).toBe(TimerSetup.minValue);

    comp.sessionLength = TimerSetup.maxValue;
    fixture.debugElement.query(By.css('#session-increment')).triggerEventHandler('click', null);
    expect(comp.sessionLength).toBe(TimerSetup.maxValue);
  });
});
