import { TestBed } from '@angular/core/testing';

import { StaffDetailsGuard } from './staff-details.guard';

describe('StaffDetailsGuard', () => {
  let guard: StaffDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StaffDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
