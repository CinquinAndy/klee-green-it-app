import { TestBed } from '@angular/core/testing';

import { PostAppNameService } from './post-app-name.service';

describe('PostAppNameService', () => {
  let service: PostAppNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostAppNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
