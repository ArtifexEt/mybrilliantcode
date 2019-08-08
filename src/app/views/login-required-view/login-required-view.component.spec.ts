import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRequiredViewComponent } from './login-required-view.component';

describe('LoginRequiredViewComponent', () => {
  let component: LoginRequiredViewComponent;
  let fixture: ComponentFixture<LoginRequiredViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRequiredViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRequiredViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
