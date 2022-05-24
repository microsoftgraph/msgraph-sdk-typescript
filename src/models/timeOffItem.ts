import {ScheduleEntity} from './scheduleEntity';

export interface TimeOffItem extends ScheduleEntity{
    /** ID of the timeOffReason for this timeOffItem. Required. */
    timeOffReasonId?:string | undefined;
}
