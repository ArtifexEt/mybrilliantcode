import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetAddedComponent } from './snippet-added.component';

describe('SnippetAddedComponent', () => {
  let component: SnippetAddedComponent;
  let fixture: ComponentFixture<SnippetAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
