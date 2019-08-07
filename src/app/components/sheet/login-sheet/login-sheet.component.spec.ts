import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSheetComponent } from './login-sheet.component';

describe('LoginSheetComponent', () => {
  let component: LoginSheetComponent;
  let fixture: ComponentFixture<LoginSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
