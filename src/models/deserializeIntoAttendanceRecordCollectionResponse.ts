import { type AttendanceRecord } from './attendanceRecord';
import { type AttendanceRecordCollectionResponse } from './attendanceRecordCollectionResponse';
import { createAttendanceRecordFromDiscriminatorValue } from './createAttendanceRecordFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAttendanceRecord } from './serializeAttendanceRecord';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAttendanceRecordCollectionResponse(attendanceRecordCollectionResponse: AttendanceRecordCollectionResponse | undefined = {} as AttendanceRecordCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(attendanceRecordCollectionResponse),
        "value": n => { attendanceRecordCollectionResponse.value = n.getCollectionOfObjectValues<AttendanceRecord>(createAttendanceRecordFromDiscriminatorValue); },
    }
}
