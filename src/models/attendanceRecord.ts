import {AttendanceInterval} from './attendanceInterval';
import {Entity} from './entity';
import {Identity} from './identity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AttendanceRecord extends Entity, Parsable {
    /**
     * List of time periods between joining and leaving a meeting.
     */
    attendanceIntervals?: AttendanceInterval[] | undefined;
    /**
     * Email address of the user associated with this attendance record.
     */
    emailAddress?: string | undefined;
    /**
     * Identity of the user associated with this attendance record.
     */
    identity?: Identity | undefined;
    /**
     * Role of the attendee. Possible values are: None, Attendee, Presenter, and Organizer.
     */
    role?: string | undefined;
    /**
     * Total duration of the attendances in seconds.
     */
    totalAttendanceInSeconds?: number | undefined;
}
