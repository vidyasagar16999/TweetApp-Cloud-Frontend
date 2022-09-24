import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { TweetsComponent } from './tweets.component';

describe('TweetsComponent', () => {
  let component: TweetsComponent;
  let fixture: ComponentFixture<TweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetsComponent ],
      imports: [AppModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
