import {AttendanceRecord} from './attendanceRecord';
import {AttendanceRecordCollectionResponse} from './attendanceRecordCollectionResponse';
import {serializeAttendanceRecord} from './serializeAttendanceRecord';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttendanceRecordCollectionResponse(writer: SerializationWriter, attendanceRecordCollectionResponse: AttendanceRecordCollectionResponse | undefined = {} as AttendanceRecordCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attendanceRecordCollectionResponse)
        writer.writeCollectionOfObjectValues<AttendanceRecord>("value", attendanceRecordCollectionResponse.value, serializeAttendanceRecord);
}
