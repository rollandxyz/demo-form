
  export class WorkTypeDefinition {
    name: string;
    description: string;
    owners: string;
    hasProductionPoints: boolean;
    productionPoints: number;
    howToApplyPoints: string;
    workComeFrom: string;
    workStoreProcedure: string;
    workSpFieldCheckDuplicate: string;
    otherSourceKeyName: string;
    otherSourceKeyValue: string;
    autoSchedule: boolean;
    scheduleHowOften: string;
    scheduleDaysWeek: string;
    scheduleDaysBiWeek: string;
    scheduleDaysMonth: string;
    scheduleDaysYear: string;
    scheduleMonthBCDay: string;
    scheduleYearBCDay: string;
    scheduleTime: string;
    scheduleWithHolidays: boolean;
    scheduleNoHolidayShift: string;
    dueBaseOnType: string;
    dueBaseTypeDays: number;
    dueBaseFieldName: string;
    whoCanWorkOnIt: string;
    howToAssignOut: string;
    assignmentFromWSourceFieldName: string;
    assignSpecDaysOfWeek: string;
    assignSpecPersons: string;
    howServedUp: string;
    ifGroupTogether: boolean;
    groupByTypeSource: string;
    groupSourceFieldName: string;
    whereShouldBeDone: string;
    overallPriorityValue: number;

    constructor() {}
    toString(): string {
      let newWorkTypeData = '';
      newWorkTypeData += 'name=' + this.name;
      newWorkTypeData += 'description=' + this.description;
      newWorkTypeData += 'owners=' + this.owners;
      newWorkTypeData += 'hasProductionPoints=' + this.hasProductionPoints;
      if (this.hasProductionPoints) {
        newWorkTypeData += 'productionPoints=' + this.productionPoints;
        newWorkTypeData += 'howToApplyPoints=' + this.howToApplyPoints;
      }
      newWorkTypeData += 'workComeFrom=' + this.workComeFrom;
      if (this.workComeFrom === '2') {
        newWorkTypeData += 'workStoreProcedure=' + this.workStoreProcedure;
        newWorkTypeData += 'workSpFieldCheckDuplicate=' + this.workSpFieldCheckDuplicate;
      } else if (this.workComeFrom === '3') {
        newWorkTypeData += 'otherSourceKeyName=' + this.otherSourceKeyName;
        newWorkTypeData += 'otherSourceKeyValue=' + this.otherSourceKeyValue;
      }

      newWorkTypeData += 'autoSchedule=' + this.autoSchedule;
      if (this.autoSchedule) {
        newWorkTypeData += 'scheduleHowOften=' + this.scheduleHowOften;
        if (this.scheduleHowOften === '2') {
          newWorkTypeData += 'scheduleDaysWeek=' + this.scheduleDaysWeek;
        } else if (this.scheduleHowOften === '3') {
          newWorkTypeData += 'scheduleDaysBiWeek=' + this.scheduleDaysBiWeek;
        } else if (this.scheduleHowOften === '4') {
          newWorkTypeData += 'scheduleDaysMonth=' + this.scheduleDaysMonth;
          newWorkTypeData += 'scheduleMonthBCDay=' + this.scheduleMonthBCDay;
        } else if (this.scheduleHowOften === '5') {
          newWorkTypeData += 'scheduleDaysYear=' + this.scheduleDaysYear;
          newWorkTypeData += 'scheduleYearBCDay=' + this.scheduleYearBCDay;
        }

        newWorkTypeData += 'scheduleTime=' + this.scheduleTime;
        newWorkTypeData += 'scheduleWithHolidays=' + this.scheduleWithHolidays;
        if (this.scheduleWithHolidays) {
          newWorkTypeData += 'scheduleNoHolidayShift=' + this.scheduleNoHolidayShift;
        }
      }

      newWorkTypeData = 'dueBaseOnType=' + this.dueBaseOnType;
      if (this.dueBaseOnType === '1') {
        newWorkTypeData += 'dueBaseTypeDays=' + this.dueBaseTypeDays;
      } else if (this.dueBaseOnType === '1') {
        newWorkTypeData += 'dueBaseFieldName=' + this.dueBaseFieldName;
      }
      newWorkTypeData += 'whoCanWorkOnIt=' + this.whoCanWorkOnIt;
      newWorkTypeData += 'howToAssignOut=' + this.howToAssignOut;
      if (this.howToAssignOut === '3') {
        newWorkTypeData += 'assignmentFromWSourceFieldName=' + this.assignmentFromWSourceFieldName;
      } else if (this.howToAssignOut === '4') {
        newWorkTypeData += 'assignSpecDaysOfWeek=' + this.assignSpecDaysOfWeek;
        newWorkTypeData += 'assignSpecPersons=' + this.assignSpecPersons;
      }
      newWorkTypeData += 'howServedUp=' + this.howServedUp;
      newWorkTypeData += 'ifGroupTogether=' + this.ifGroupTogether;
      if (this.ifGroupTogether) {
        newWorkTypeData += 'groupByTypeSource=' + this.groupByTypeSource;
      }
      newWorkTypeData += 'whereShouldBeDone=' + this.whereShouldBeDone;
      newWorkTypeData += 'overallPriorityValue=' + this.overallPriorityValue;
      return newWorkTypeData;
    }

  }
