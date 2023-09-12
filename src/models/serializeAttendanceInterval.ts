import { type AttendanceInterval } from './attendanceInterval';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAttendanceInterval(writer: SerializationWriter, attendanceInterval: AttendanceInterval | undefined = {} as AttendanceInterval) : void {
        writer.writeNumberValue("durationInSeconds", attendanceInterval.durationInSeconds);
        writer.writeDateValue("joinDateTime", attendanceInterval.joinDateTime);
        writer.writeDateValue("leaveDateTime", attendanceInterval.leaveDateTime);
        writer.writeStringValue("@odata.type", attendanceInterval.odataType);
        writer.writeAdditionalData(attendanceInterval.additionalData);
}
