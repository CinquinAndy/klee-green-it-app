import { TestBed } from '@angular/core/testing';

import { GetDataFromTableService } from './get-data-from-table.service';

describe('GetDataFromTableService', () => {
  let service: GetDataFromTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataFromTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
