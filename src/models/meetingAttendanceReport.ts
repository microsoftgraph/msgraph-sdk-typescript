import {AttendanceRecord} from './attendanceRecord';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingAttendanceReport extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** List of attendance records of an attendance report. Read-only. */
    attendanceRecords?: AttendanceRecord[] | undefined;
    /** UTC time when the meeting ended. Read-only. */
    meetingEndDateTime?: Date | undefined;
    /** UTC time when the meeting started. Read-only. */
    meetingStartDateTime?: Date | undefined;
    /** Total number of participants. Read-only. */
    totalParticipantCount?: number | undefined;
}
