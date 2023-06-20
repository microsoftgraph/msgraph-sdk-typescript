import {AttendanceInterval} from './attendanceInterval';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttendanceInterval(attendanceInterval: AttendanceInterval | undefined = {} as AttendanceInterval, writer: SerializationWriter) : void {
        writer.writeNumberValue("durationInSeconds", attendanceInterval.durationInSeconds);
        writer.writeDateValue("joinDateTime", attendanceInterval.joinDateTime);
        writer.writeDateValue("leaveDateTime", attendanceInterval.leaveDateTime);
        writer.writeStringValue("@odata.type", attendanceInterval.odataType);
        writer.writeAdditionalData(attendanceInterval.additionalData);
}
