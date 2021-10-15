import { TestBed } from '@angular/core/testing';

import { GetListDataMesuredService } from './get-list-data-mesured.service';

describe('GetListDataMesuredService', () => {
  let service: GetListDataMesuredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListDataMesuredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
