import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSnippetsViewComponent } from './admin-snippets-view.component';

describe('AdminSnippetsViewComponent', () => {
  let component: AdminSnippetsViewComponent;
  let fixture: ComponentFixture<AdminSnippetsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSnippetsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSnippetsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
