import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailContainer } from './user-detail-container';

describe('UserDetailContainer', () => {
  let component: UserDetailContainer;
  let fixture: ComponentFixture<UserDetailContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
