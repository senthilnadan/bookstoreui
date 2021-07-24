import { TestBed } from '@angular/core/testing';
import { BookComponent } from './book.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BookComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BookComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-fundamendals'`, () => {
    const fixture = TestBed.createComponent(BookComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng-fundamendals');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BookComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ng-fundamendals app is running!');
  });
});
