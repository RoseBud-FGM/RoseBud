import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOrgComponent } from './login-org.component';

describe('LoginOrgComponent', () => {
  let component: LoginOrgComponent;
  let fixture: ComponentFixture<LoginOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginOrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
