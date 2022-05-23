import {ScheduleChangeRequest} from './scheduleChangeRequest';

export interface OpenShiftChangeRequest extends ScheduleChangeRequest{
    /** ID for the open shift. */
    openShiftId?:string | undefined;
}
