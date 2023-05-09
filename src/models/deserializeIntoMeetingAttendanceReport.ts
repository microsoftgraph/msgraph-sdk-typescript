import {AttendanceRecord} from './attendanceRecord';
import {createAttendanceRecordFromDiscriminatorValue} from './createAttendanceRecordFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {MeetingAttendanceReport} from './meetingAttendanceReport';
import {serializeAttendanceRecord} from './serializeAttendanceRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingAttendanceReport(meetingAttendanceReport: MeetingAttendanceReport | undefined = {} as MeetingAttendanceReport) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(meetingAttendanceReport),
        "attendanceRecords": n => { meetingAttendanceReport.attendanceRecords = n.getCollectionOfObjectValues<AttendanceRecord>(createAttendanceRecordFromDiscriminatorValue); },
        "meetingEndDateTime": n => { meetingAttendanceReport.meetingEndDateTime = n.getDateValue(); },
        "meetingStartDateTime": n => { meetingAttendanceReport.meetingStartDateTime = n.getDateValue(); },
        "totalParticipantCount": n => { meetingAttendanceReport.totalParticipantCount = n.getNumberValue(); },
    }
}
