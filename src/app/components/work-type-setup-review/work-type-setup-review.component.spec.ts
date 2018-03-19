import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTypeSetupReviewComponent } from './work-type-setup-review.component';

describe('WorkTypeSetupReviewComponent', () => {
  let component: WorkTypeSetupReviewComponent;
  let fixture: ComponentFixture<WorkTypeSetupReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTypeSetupReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTypeSetupReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
