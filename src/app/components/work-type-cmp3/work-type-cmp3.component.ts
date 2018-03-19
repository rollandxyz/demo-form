import { KeyValuePair } from './../../models/key.value.pair';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';
import { patternValidator } from '../../shared/pattern-validator';
import { CustomValidators, ConfirmValidParentMatcher, regExps, errorMessages } from '../../shared/custom-validators';
import { AlertService } from '../../services/alert.service';
import { WorkTypeDefinition } from '../../models/work.type.definition';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-work-type-cmp3',
  templateUrl: './work-type-cmp3.component.html',
  styleUrls: ['./work-type-cmp3.component.css']
})
export class WorkTypeCmp3Component implements OnInit {
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
  EnumAssignmentDueTypes: KeyValuePair[] = [
    {key: 1, value: 'Due date based on certain amount of days from create date'},
    {key: 2, value: 'Due date based on data from where the work is coming from'}
  ];
  EnumAssignOutMethods: KeyValuePair[] = [
    {key: 1, value: 'Take into account all team member\'s workload and distribute'},
    {key: 2, value: 'Distribute evenly across all team members assigned to work type'},
    {key: 3, value: 'Assignment coming from the work source'},
    {key: 4, value: 'Assign specific days to specific people'}
  ];
  EnumServeUps: KeyValuePair[] = [
    {key: 1, value: 'Team member uses Get Next to see one at a time'},
    {key: 2, value: 'Team member has work automatically assigned to them and added to their queue'}
  ];
  EnumItemGroupMethods: KeyValuePair[] = [
    {key: 1, value: 'Group by the work type'},
    {key: 2, value: 'Group based on data from where the work is coming from'}
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

  expandedAll = true;
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

  doValidation() {
    let keyValue: KeyValuePair;
    const validNewWorkTypeSetup = new WorkTypeDefinition();
    // 1.name
    if (this.newWorkType.name) {
      validNewWorkTypeSetup.name = this.newWorkType.name;
    } else {
      this.alertService.error('name is missing or invalid!');
    }

    // 2.description
    if (this.newWorkType.description) {
      validNewWorkTypeSetup.name = this.newWorkType.description;
    } else {
      this.alertService.error('description is missing or invalid!');
    }

    // 3. owners
    if (this.newWorkType.description) {
      validNewWorkTypeSetup.owners = this.newWorkType.owners;
    } else {
      this.alertService.error('owners is missing or invalid!');
    }

    // 4. production points
    if (this.newWorkType.hasProductionPoints === true || this.newWorkType.hasProductionPoints === false) {
      validNewWorkTypeSetup.hasProductionPoints = this.newWorkType.hasProductionPoints;
      if (this.newWorkType.hasProductionPoints === true) {
        if (typeof this.newWorkType.productionPoints  === 'number') {
          // check whole number ??
          validNewWorkTypeSetup.productionPoints = this.newWorkType.productionPoints;
        } else {
          this.alertService.error('productionPoints is missing or invalid!');
        }
        keyValue = this.EnumApplyPointMethods.find(a => a.key === this.newWorkType.howToApplyPoints);
        if (keyValue) {
          validNewWorkTypeSetup.howToApplyPoints = keyValue.value;
        } else {
          this.alertService.error('howToApplyPoints is missing or invalid!');
        }
      }
    } else {
      this.alertService.error('hasProductionPoints is missing or invalid!');
    }

    // 5. source of work
    keyValue = this.EnumApplyPointMethods.find(a => a.key === this.newWorkType.workComeFrom);
    if (keyValue) {
      validNewWorkTypeSetup.workComeFrom = keyValue.value;
      if (keyValue.key === 2) {
        if (this.newWorkType.workStoreProcedure) {
          validNewWorkTypeSetup.workStoreProcedure = this.newWorkType.workStoreProcedure;
        } else {
          this.alertService.error('workStoreProcedure is missing or invalid!');
        }
        if (this.newWorkType.workSpFieldCheckDuplicate) {
          validNewWorkTypeSetup.workSpFieldCheckDuplicate = this.newWorkType.workSpFieldCheckDuplicate;
        } else {
          this.alertService.error('workSpFieldCheckDuplicate is missing or invalid!');
        }
      } else if (keyValue.key === 3) {
        if (this.newWorkType.otherSourceKeyName) {
          validNewWorkTypeSetup.otherSourceKeyName = this.newWorkType.otherSourceKeyName;
        } else {
          this.alertService.error('otherSourceKeyName is missing or invalid!');
        }
        if (this.newWorkType.otherSourceKeyValue) {
          validNewWorkTypeSetup.otherSourceKeyValue = this.newWorkType.otherSourceKeyValue;
        } else {
          this.alertService.error('otherSourceKeyValue is missing or invalid!');
        }
      }
    } else {
      this.alertService.error('workComeFrom is missing or invalid!');
    }

    // 6
    if (this.newWorkType.autoSchedule === true || this.newWorkType.autoSchedule === false) {
      validNewWorkTypeSetup.autoSchedule = this.newWorkType.autoSchedule;

      if (this.newWorkType.scheduleHowOften) {
        validNewWorkTypeSetup.scheduleHowOften = this.newWorkType.scheduleHowOften;
        keyValue = this.EnumServeUps.find(a => a.key === this.newWorkType.scheduleHowOften);
        if (keyValue.key === 2) {
          if (this.newWorkType.scheduleDaysWeek) {
            validNewWorkTypeSetup.scheduleDaysWeek = this.newWorkType.scheduleDaysWeek;
          } else {
            this.alertService.error('scheduleDaysWeek is missing or invalid!');
          }
        } else if (keyValue.key === 3) {
          if (this.newWorkType.scheduleDaysBiWeek) {
            validNewWorkTypeSetup.scheduleDaysBiWeek = this.newWorkType.scheduleDaysBiWeek;
          } else {
            this.alertService.error('scheduleDaysBiWeek is missing or invalid!');
          }
        } else if (keyValue.key === 4) {
          if (this.newWorkType.scheduleDaysMonth) {
            validNewWorkTypeSetup.scheduleDaysMonth = this.newWorkType.scheduleDaysMonth;
          } else {
            this.alertService.error('scheduleDaysMonth is missing or invalid!');
          }
          if (this.newWorkType.scheduleMonthBCDay) {
            validNewWorkTypeSetup.scheduleMonthBCDay = this.newWorkType.scheduleMonthBCDay;
          } else {
            this.alertService.error('scheduleMonthBCDay is missing or invalid!');
          }
        } else if (keyValue.key === 5) {
          if (this.newWorkType.scheduleDaysYear) {
            validNewWorkTypeSetup.scheduleDaysYear = this.newWorkType.scheduleDaysYear;
          } else {
            this.alertService.error('scheduleDaysYear is missing or invalid!');
          }
          if (this.newWorkType.scheduleYearBCDay) {
            validNewWorkTypeSetup.scheduleYearBCDay = this.newWorkType.scheduleYearBCDay;
          } else {
            this.alertService.error('scheduleYearBCDay is missing or invalid!');
          }
        }
      } else {
        this.alertService.error('scheduleHowOften is missing or invalid!');
      }

      if (this.newWorkType.scheduleTime) {
        validNewWorkTypeSetup.scheduleTime = this.newWorkType.scheduleTime;
      } else {
        this.alertService.error('scheduleTime is missing or invalid!');
      }
      if (this.newWorkType.scheduleWithHolidays === true || this.newWorkType.scheduleWithHolidays === false) {
        validNewWorkTypeSetup.scheduleWithHolidays = this.newWorkType.scheduleWithHolidays;

        if (this.newWorkType.scheduleNoHolidayShift) {
          validNewWorkTypeSetup.scheduleNoHolidayShift = this.newWorkType.scheduleNoHolidayShift;
        } else {
          this.alertService.error('scheduleNoHolidayShift is missing or invalid!');
        }
      } else {
        this.alertService.error('scheduleWithHolidays is missing or invalid!');
      }
    } else {
      this.alertService.error('autoSchedule is missing or invalid!');
    }

    // 7.
    if (this.newWorkType.dueBaseOnType) {
      validNewWorkTypeSetup.dueBaseOnType = this.newWorkType.dueBaseOnType;
    } else {
      this.alertService.error('dueBaseOnType is missing or invalid!');
    }
    keyValue = this.EnumServeUps.find(a => a.key === this.newWorkType.dueBaseOnType);
    if (keyValue) {
      if (keyValue.key === 1) {
        validNewWorkTypeSetup.dueBaseTypeDays = parseInt(keyValue.value, 10);
      } else if (keyValue.key === 2) {
        validNewWorkTypeSetup.dueBaseFieldName = keyValue.value;
      } else {
        this.alertService.error('dueBaseTypeDays or dueBaseFieldName is missing or invalid!');
      }
    } else {
      this.alertService.error('dueBaseOnType is missing or invalid!');
    }

    // 8.
    if (this.newWorkType.whoCanWorkOnIt) {
      validNewWorkTypeSetup.whoCanWorkOnIt = this.newWorkType.whoCanWorkOnIt;

      keyValue = this.EnumServeUps.find(a => a.key === this.newWorkType.howToAssignOut);
      if (keyValue) {
        validNewWorkTypeSetup.howToAssignOut = this.newWorkType.howToAssignOut;
        if (keyValue.key === 3) {
          if (this.newWorkType.assignmentFromWSourceFieldName) {
            validNewWorkTypeSetup.assignmentFromWSourceFieldName = this.newWorkType.assignmentFromWSourceFieldName;
          } else {
            this.alertService.error('assignmentFromWSourceFieldName is missing or invalid!');
          }
        } else if (keyValue.key === 4) {
          if (this.newWorkType.assignSpecDaysOfWeek) {
            validNewWorkTypeSetup.assignSpecDaysOfWeek = this.newWorkType.assignSpecDaysOfWeek;
          } else {
            this.alertService.error('assignSpecDaysOfWeek is missing or invalid!');
          }
          if (this.newWorkType.assignSpecPersons) {
            validNewWorkTypeSetup.assignSpecPersons = this.newWorkType.assignSpecPersons;
          } else {
            this.alertService.error('assignSpecPersons is missing or invalid!');
          }
        }
      } else {
        this.alertService.error('howToAssignOut is missing or invalid!');
      }
    } else {
      this.alertService.error('whoCanWorkOnIt is missing or invalid!');
    }

    // 9.
    keyValue = this.EnumServeUps.find(a => a.key === this.newWorkType.howServedUp);
    if (keyValue) {
      this.alertService.info(keyValue.value);
      validNewWorkTypeSetup.howServedUp = keyValue.value;
    } else {
      this.alertService.error('howServedUp is missing!');
    }
    // 10.
    keyValue = this.EnumYesNo.find(a => a.key === this.newWorkType.ifGroupTogether);
    if (keyValue) {
      this.alertService.info(keyValue.value);
      validNewWorkTypeSetup.ifGroupTogether = this.newWorkType.ifGroupTogether;
    } else {
      this.alertService.error('howServedUp is missing!');
    }
    this.alertService.info('Valide Data: ' + JSON.stringify(validNewWorkTypeSetup));
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

