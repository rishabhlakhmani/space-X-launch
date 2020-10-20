import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meta } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let meta: Meta;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [{ provide: Meta, useClass: Meta }],
    }).compileComponents();
    meta = TestBed.inject(Meta);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should have a metatag name=keywords with content', () => {
    app.ngOnInit();
    expect(meta.getTag('name=keywords').content).toBe(
      'Angular SEO Integration, SpaceX Launch, Spacex APIs, Angular Universal, Angular 10'
    );
  });

  it('should have a metatag name=keywords with content', () => {
    app.ngOnInit();
    expect(meta.getTag('name=author').content).toBe('Rishabh Lakhmani');
  });
});
