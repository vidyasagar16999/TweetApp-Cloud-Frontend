import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { TweetComponent } from './tweet.component';

describe('TweetComponent', () => {
  let component: TweetComponent;
  let fixture: ComponentFixture<TweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetComponent ],
      imports: [AppModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
