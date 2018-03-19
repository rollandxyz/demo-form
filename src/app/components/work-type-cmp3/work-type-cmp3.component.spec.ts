import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTypeCmp3Component } from './work-type-cmp3.component';

describe('WorkTypeCmp3Component', () => {
  let component: WorkTypeCmp3Component;
  let fixture: ComponentFixture<WorkTypeCmp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTypeCmp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTypeCmp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
