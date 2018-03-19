import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTypeCmp4Component } from './work-type-cmp4.component';

describe('WorkTypeCmp4Component', () => {
  let component: WorkTypeCmp4Component;
  let fixture: ComponentFixture<WorkTypeCmp4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTypeCmp4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTypeCmp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
