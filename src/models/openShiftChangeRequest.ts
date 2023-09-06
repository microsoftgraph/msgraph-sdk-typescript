import { type ScheduleChangeRequest } from './scheduleChangeRequest';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface OpenShiftChangeRequest extends Parsable, ScheduleChangeRequest {
    /**
     * ID for the open shift.
     */
    openShiftId?: string | undefined;
}
