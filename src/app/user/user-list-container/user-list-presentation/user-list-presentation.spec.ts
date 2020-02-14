import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListPresentation } from './user-list-presentation';

describe('UserListPresentation', () => {
  let component: UserListPresentation;
  let fixture: ComponentFixture<UserListPresentation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListPresentation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListPresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
