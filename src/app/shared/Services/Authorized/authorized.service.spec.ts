import { TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { AuthorizedService } from './authorized.service';

describe('AuthorizedService', () => {
  let service: AuthorizedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
    service = TestBed.inject(AuthorizedService);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });
});
