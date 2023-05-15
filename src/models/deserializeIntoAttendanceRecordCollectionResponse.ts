import {AttendanceRecord} from './attendanceRecord';
import {AttendanceRecordCollectionResponse} from './attendanceRecordCollectionResponse';
import {createAttendanceRecordFromDiscriminatorValue} from './createAttendanceRecordFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAttendanceRecord} from './serializeAttendanceRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttendanceRecordCollectionResponse(attendanceRecordCollectionResponse: AttendanceRecordCollectionResponse | undefined = {} as AttendanceRecordCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(attendanceRecordCollectionResponse),
        "value": n => { attendanceRecordCollectionResponse.value = n.getCollectionOfObjectValues<AttendanceRecord>(createAttendanceRecordFromDiscriminatorValue); },
    }
}
