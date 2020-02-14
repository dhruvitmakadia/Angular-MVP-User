import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailPresentation } from './user-detail-presentation';

describe('UserDetailPresentation', () => {
  let component: UserDetailPresentation;
  let fixture: ComponentFixture<UserDetailPresentation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailPresentation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailPresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
