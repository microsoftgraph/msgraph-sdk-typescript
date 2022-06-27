import {AttendanceInterval} from './attendanceInterval';
import {Entity} from './entity';
import {Identity} from './identity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttendanceRecord extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** List of time periods between joining and leaving a meeting. */
    attendanceIntervals?: AttendanceInterval[] | undefined;
    /** Email address of the user associated with this atttendance record. */
    emailAddress?: string | undefined;
    /** Identity of the user associated with this atttendance record. */
    identity?: Identity | undefined;
    /** Role of the attendee. Possible values are: None, Attendee, Presenter, and Organizer. */
    role?: string | undefined;
    /** Total duration of the attendances in seconds. */
    totalAttendanceInSeconds?: number | undefined;
}
