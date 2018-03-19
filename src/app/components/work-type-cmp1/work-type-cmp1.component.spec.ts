import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTypeCmp1Component } from './work-type-cmp1.component';

describe('WorkTypeCmp1Component', () => {
  let component: WorkTypeCmp1Component;
  let fixture: ComponentFixture<WorkTypeCmp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTypeCmp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTypeCmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
