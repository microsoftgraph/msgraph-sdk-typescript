import { type AttendanceRecord } from './attendanceRecord';
import { createAttendanceRecordFromDiscriminatorValue } from './createAttendanceRecordFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type MeetingAttendanceReport } from './meetingAttendanceReport';
import { serializeAttendanceRecord } from './serializeAttendanceRecord';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingAttendanceReport(meetingAttendanceReport: MeetingAttendanceReport | undefined = {} as MeetingAttendanceReport) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(meetingAttendanceReport),
        "attendanceRecords": n => { meetingAttendanceReport.attendanceRecords = n.getCollectionOfObjectValues<AttendanceRecord>(createAttendanceRecordFromDiscriminatorValue); },
        "meetingEndDateTime": n => { meetingAttendanceReport.meetingEndDateTime = n.getDateValue(); },
        "meetingStartDateTime": n => { meetingAttendanceReport.meetingStartDateTime = n.getDateValue(); },
        "totalParticipantCount": n => { meetingAttendanceReport.totalParticipantCount = n.getNumberValue(); },
    }
}
