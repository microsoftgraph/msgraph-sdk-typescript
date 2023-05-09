import {AttendanceInterval} from './attendanceInterval';
import {AttendanceRecord} from './attendanceRecord';
import {Identity} from './identity';
import {serializeAttendanceInterval} from './serializeAttendanceInterval';
import {serializeEntity} from './serializeEntity';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttendanceRecord(writer: SerializationWriter, attendanceRecord: AttendanceRecord | undefined = {} as AttendanceRecord) : void {
        serializeEntity(writer, attendanceRecord)
        writer.writeCollectionOfObjectValues<AttendanceInterval>("attendanceIntervals", attendanceRecord.attendanceIntervals, serializeAttendanceInterval);
        writer.writeStringValue("emailAddress", attendanceRecord.emailAddress);
        writer.writeObjectValue<Identity>("identity", attendanceRecord.identity, serializeIdentity);
        writer.writeStringValue("role", attendanceRecord.role);
        writer.writeNumberValue("totalAttendanceInSeconds", attendanceRecord.totalAttendanceInSeconds);
}
