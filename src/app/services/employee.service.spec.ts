import { TestBed } from '@angular/core/testing';

import { EmployeeSrivice } from './employee.service';

describe('StudentdetailsService', () => {
  let service: EmployeeSrivice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeSrivice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
