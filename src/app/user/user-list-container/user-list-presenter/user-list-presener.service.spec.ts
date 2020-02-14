import { TestBed } from '@angular/core/testing';

import { UserListPresener } from './user-list-presener';

describe('UserListPresener', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserListPresener = TestBed.get(UserListPresener);
    expect(service).toBeTruthy();
  });
});
