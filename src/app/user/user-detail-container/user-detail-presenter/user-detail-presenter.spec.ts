import { TestBed } from '@angular/core/testing';

import { UserDetailPresenter } from './user-detail-presenter';

describe('UserDetailPresenter', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDetailPresenter = TestBed.get(UserDetailPresenter);
    expect(service).toBeTruthy();
  });
});
