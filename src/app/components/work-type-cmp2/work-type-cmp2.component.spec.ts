import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTypeCmp2Component } from './work-type-cmp2.component';

describe('WorkTypeCmp2Component', () => {
  let component: WorkTypeCmp2Component;
  let fixture: ComponentFixture<WorkTypeCmp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTypeCmp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTypeCmp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
