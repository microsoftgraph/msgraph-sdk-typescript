import {AttendanceRecord} from './attendanceRecord';
import {AttendanceRecordCollectionResponse} from './attendanceRecordCollectionResponse';
import {serializeAttendanceRecord} from './serializeAttendanceRecord';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttendanceRecordCollectionResponse(attendanceRecordCollectionResponse: AttendanceRecordCollectionResponse | undefined = {} as AttendanceRecordCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attendanceRecordCollectionResponse)
        writer.writeCollectionOfObjectValues<AttendanceRecord>("value", attendanceRecordCollectionResponse.value, serializeAttendanceRecord);
}
