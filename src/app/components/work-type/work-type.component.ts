import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';
import { patternValidator } from '../../shared/pattern-validator';
import { CustomValidators, ConfirmValidParentMatcher, regExps, errorMessages } from '../../shared/custom-validators';
import { AlertService } from '../../services/alert.service';
import { WorkTypeDefinition } from '../../models/work.type.definition';
import { KeyValuePair } from '../../models/key.value.pair';

@Component({
  selector: 'app-work-type',
  templateUrl: './work-type.component.html',
  styleUrls: ['./work-type.component.css']
})
export class WorkTypeComponent implements OnInit {
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

  tMembers = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];

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

