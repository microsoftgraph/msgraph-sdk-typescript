import {AttendanceRecord} from './attendanceRecord';
import {MeetingAttendanceReport} from './meetingAttendanceReport';
import {serializeAttendanceRecord} from './serializeAttendanceRecord';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingAttendanceReport(writer: SerializationWriter, meetingAttendanceReport: MeetingAttendanceReport | undefined = {} as MeetingAttendanceReport) : void {
        serializeEntity(writer, meetingAttendanceReport)
        writer.writeCollectionOfObjectValues<AttendanceRecord>("attendanceRecords", meetingAttendanceReport.attendanceRecords, serializeAttendanceRecord);
        writer.writeDateValue("meetingEndDateTime", meetingAttendanceReport.meetingEndDateTime);
        writer.writeDateValue("meetingStartDateTime", meetingAttendanceReport.meetingStartDateTime);
        writer.writeNumberValue("totalParticipantCount", meetingAttendanceReport.totalParticipantCount);
}
