import { TestBed } from '@angular/core/testing';

import { UserFormPresenter } from './user-form-presenter';

describe('UserFormPresenter', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFormPresenter = TestBed.get(UserFormPresenter);
    expect(service).toBeTruthy();
  });
});
