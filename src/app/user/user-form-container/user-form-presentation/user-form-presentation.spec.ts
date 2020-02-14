import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormPresentation } from './user-form-presentation';

describe('UserFormPresentation', () => {
  let component: UserFormPresentation;
  let fixture: ComponentFixture<UserFormPresentation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormPresentation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormPresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
