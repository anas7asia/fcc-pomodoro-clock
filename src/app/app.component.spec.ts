import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TimerSetup } from './constants';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(comp).toBeTruthy();
  });

  it('should reset timer if reset button is pressed', () => {
    comp.breakLength = 10
    comp.sessionLength = 20
    comp.isRunning = true
    comp.isSession = false
    comp.timeLeft = 600
    comp.timer = setInterval(() => {}, 10000);

    comp.reset();

    expect(comp.breakLength).toBe(TimerSetup.defaultBreakLength);
    expect(comp.sessionLength).toBe(TimerSetup.defaultSessionLength);
    expect(comp.timeLeft).toBe(TimerSetup.defaultSessionLength * 60);
    expect(comp.isRunning).toBeFalse();
    expect(comp.isSession).toBeTrue();
    expect(comp.timer).toBeUndefined();
  });

  it('should start/pause counting', fakeAsync(() => {
    comp.timeLeft = 10;

    // start timer
    comp.pressStart();
    expect(comp.isRunning).toBeTrue();
    tick(1000);
    expect(comp.timeLeft).toBe(9);
    tick(1000);
    expect(comp.timeLeft).toBe(8);
    tick(1000);
    expect(comp.timeLeft).toBe(7);
    
    // pause timer
    comp.pressStart();
    expect(comp.isRunning).toBeFalse();
    tick(3000);
    expect(comp.timeLeft).toBe(7);

    // start again
    comp.pressStart();
    expect(comp.isRunning).toBeTrue();
    tick(1000);
    expect(comp.timeLeft).toBe(6);

    // pause timer
    comp.pressStart();
    expect(comp.isRunning).toBeFalse();
    tick(1000);
    expect(comp.timeLeft).toBe(6);

    // don't forget to stop timer after the test, otherwise fakeAsync will not be destroyed
    clearInterval(comp.timer);
  }));

  it('should calculate timeLeft in seconds', () => {
    comp.updateSessionLength(10);
    expect(comp.timeLeft).toBe(600);
  });

  it('should switch between session and break values while counting', fakeAsync(() => { 
    comp.pressStart();
    
    // first session 
    comp.timeLeft = 2; // seconds
    tick(1000);
    tick(1000);
    tick(1000); // one second more to wait for setTimeout
    expect(comp.isSession).toBeFalse(); // turns to break
    
    // first break
    comp.timeLeft = 2; // seconds
    tick(1000);
    tick(1000);
    tick(1000); // one second more to wait for setTimeout
    expect(comp.isSession).toBeTrue(); // turns to session here
    
    // second session
    comp.timeLeft = 2; // seconds
    tick(1000);
    tick(1000);
    tick(1000); // one second more to wait for setTimeout
    expect(comp.isSession).toBeFalse(); // second break
    
    // don't forget to stop timer after the test, otherwise fakeAsync will not be destroyed
    clearInterval(comp.timer);
  }));

  it('should update timer value when session and break are switched', fakeAsync(() => {
    comp.sessionLength = 0.1; // 6 sec
    comp.breakLength = 0.05; // 3 sec
    comp.timeLeft = comp.sessionLength * 60;

    comp.pressStart();

    tick(1000);
    tick(1000);
    tick(1000);
    tick(1000);
    tick(1000);
    tick(1000); // after 6 seconds
    tick(1000); // one more to let setTimeout be handled
    expect(comp.timeLeft).toBe(2); // 3 sec (minus prevoius one) is break length
    
    // don't forget to stop timer after the test, otherwise fakeAsync will not be destroyed
    clearInterval(comp.timer);
  }));
});
