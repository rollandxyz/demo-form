import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTypeSetupComponent } from './work-type-setup.component';

describe('WorkTypeSetupComponent', () => {
  let component: WorkTypeSetupComponent;
  let fixture: ComponentFixture<WorkTypeSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTypeSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTypeSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
