import { type AttendanceRecord } from './attendanceRecord';
import { type AttendanceRecordCollectionResponse } from './attendanceRecordCollectionResponse';
import { serializeAttendanceRecord } from './serializeAttendanceRecord';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAttendanceRecordCollectionResponse(writer: SerializationWriter, attendanceRecordCollectionResponse: AttendanceRecordCollectionResponse | undefined = {} as AttendanceRecordCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attendanceRecordCollectionResponse)
        writer.writeCollectionOfObjectValues<AttendanceRecord>("value", attendanceRecordCollectionResponse.value, serializeAttendanceRecord);
}
