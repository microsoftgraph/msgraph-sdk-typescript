import {ScheduleChangeRequest} from './scheduleChangeRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OpenShiftChangeRequest extends Parsable, ScheduleChangeRequest {
    /**
     * ID for the open shift.
     */
    openShiftId?: string | undefined;
}
