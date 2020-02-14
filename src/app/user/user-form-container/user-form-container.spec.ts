import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormContainer } from './user-form-container';

describe('UserFormContainer', () => {
  let component: UserFormContainer;
  let fixture: ComponentFixture<UserFormContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
