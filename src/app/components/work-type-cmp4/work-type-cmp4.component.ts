import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';
import { patternValidator } from '../../shared/pattern-validator';
import { CustomValidators, ConfirmValidParentMatcher, regExps, errorMessages } from '../../shared/custom-validators';
import { AlertService } from '../../services/alert.service';
import { WorkTypeDefinition } from '../../models/work.type.definition';
import { KeyValuePair } from '../../models/key.value.pair';
import { MatChipInputEvent } from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-work-type-cmp4',
  templateUrl: './work-type-cmp4.component.html',
  styleUrls: ['./work-type-cmp4.component.css']
})
export class WorkTypeCmp4Component implements OnInit {
  EnumYesNo: KeyValuePair[] = [
    {key: true, value: 'Yes'},
    {key: false, value: 'No'}
  ];
  EnumApplyPointMethods: KeyValuePair[] = [
    {key: 1, value: 'Apply points per work type' },
    {key: 2, value: 'Apply points per work item' }
  ];
  EnumWorkComeFroms: KeyValuePair[] = [
    {key: 1, value: 'Recurring'},
    {key: 2, value: 'Stored Procedure'},
    {key: 3, value: 'Other Source'}
  ];
  EnumAutoScheduleRun: KeyValuePair[] = [
    {key: 1, value: 'Daily'},
    {key: 2, value: 'Weekly'},
    {key: 3, value: 'Bi-Weekly'},
    {key: 4, value: 'Monthly'},
    {key: 5, value: 'Annually'}
  ];
  EnumCalendarBusiness: KeyValuePair[] = [
    {key: 1, value: 'Calendar Day'},
    {key: 2, value: 'Business Day'}
  ];
  EnumAutoScheduleRunOffsets: KeyValuePair[] = [
    {key: 1, value: 'Before a holiday or weekend'},
    {key: 2, value: 'After a holiday or weeken'}
  ];
  EnumAssignMethods: KeyValuePair[] = [
    {key: 1, value: 'Take into account all team member\'s workload and distribute'},
    {key: 2, value: 'Distribute evenly across all team members assigned to work type'},
    {key: 3, value: 'Assignment coming from the work source'},
    {key: 4, value: 'Assign specific days to specific people'}
  ];
  EnumStoreProcedures: KeyValuePair[] = [
    {key: 1, value: 'Store Procedure 01'},
    {key: 2, value: 'Store Procedure 02'},
    {key: 3, value: 'Store Procedure 03'},
    {key: 4, value: 'Store Procedure 04'}
  ];
  step = 0;

  totalSteps = 100;
  tMembers = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];
  separatorKeysCodes = [ENTER, COMMA];

  newWorkType: WorkTypeDefinition;

  constructor(private alertService: AlertService) { }
  ngOnInit() {
    this.newWorkType = new WorkTypeDefinition();
    this.EnumApplyPointMethods.forEach(m => {
      console.log(m);
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  addOwner(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tMembers.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeOwner(fruit: any): void {
    const index = this.tMembers.indexOf(fruit);

    if (index >= 0) {
      this.tMembers.splice(index, 1);
    }
  }

  previewData() {
    this.alertService.warn('Thanks for submitting! Data: ' + JSON.stringify(this.newWorkType));
  }
  saveData() {
    this.alertService.success('save');
  }
  resetData() {
    this.alertService.info('Reset!!');
  }
}

