import {ScheduleEntity} from './scheduleEntity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeOffItem extends Partial<Parsable>, ScheduleEntity {
    /** ID of the timeOffReason for this timeOffItem. Required. */
    timeOffReasonId?: string | undefined;
}
