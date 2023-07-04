import {ScheduleChangeRequest} from './scheduleChangeRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeOffRequest extends Parsable, ScheduleChangeRequest {
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    endDateTime?: Date | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    startDateTime?: Date | undefined;
    /**
     * The reason for the time off.
     */
    timeOffReasonId?: string | undefined;
}
