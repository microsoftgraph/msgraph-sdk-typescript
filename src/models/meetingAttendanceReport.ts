import {AttendanceRecord} from './attendanceRecord';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingAttendanceReport extends Entity, Parsable {
    /**
     * List of attendance records of an attendance report. Read-only.
     */
    attendanceRecords?: AttendanceRecord[] | undefined;
    /**
     * UTC time when the meeting ended. Read-only.
     */
    meetingEndDateTime?: Date | undefined;
    /**
     * UTC time when the meeting started. Read-only.
     */
    meetingStartDateTime?: Date | undefined;
    /**
     * Total number of participants. Read-only.
     */
    totalParticipantCount?: number | undefined;
}
