import { TestBed } from '@angular/core/testing';

import { GetListAppService } from './get-list-app.service';

describe('GetListAppService', () => {
  let service: GetListAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
